using System;
using System.Collections.Generic;
using System.Linq;
using AutumnYin.API.Model;
using AutumnYin.API.Services.ArticleService;
using Microsoft.AspNetCore.Mvc;

namespace AutumnYin.API.Controllers
{
    [Route("article")]
    [ApiController]
    public class ArticleApiController : ControllerBase
    {
        private readonly IArticleService articleService;
        public ArticleApiController(IArticleService articleService)
        {
            this.articleService = articleService;
        }
        [HttpGet("index/{categoryCode}/{startAt}/{size}")]
        public ActionResult<IEnumerable<ArticleInfo>> IndexGet(string categoryCode,int startAt,int size)
        {
            var orderedAndFiltedByCCode = from info in articleService.GetAllArticle()
                                        orderby DateTime.Parse(info.CreationTime) descending
                                          orderby info.SetTop descending
                                          where categoryCode == "all" || categoryCode == info.CategroyCode
                                          select info;

            var visiable = from info in orderedAndFiltedByCCode
                           where !info.Hide
                           select info;

            var result = visiable.Skip(startAt).Take(size);

            return result.ToArray();
        }

        [HttpGet("info/{id}")]
        public ActionResult<ArticleInfo> Get(string id)
        {
            return articleService.GetInfoById(id);
        }

        [HttpGet("content/{id}")]
        public ActionResult<string> ContentGet(string id)
        {
            return articleService.GetContentById(id);
        }
        [HttpGet("aimg/{id}/{fileName}")]
        public ActionResult ContentResourceGet(string id,string fileName)
        {
            return new PhysicalFileResult(articleService.GetFile(id,fileName),"image/jpeg");
        }
    }
}
