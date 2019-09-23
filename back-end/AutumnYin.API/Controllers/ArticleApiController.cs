using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutumnYin.API.Model;
using AutumnYin.API.Services;
using AutumnYin.API.Services.ArticleService;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
            return (from article in articleService.GetIndex(categoryCode, startAt, size)
                   select article).ToArray();
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
            return new PhysicalFileResult(articleService.GetImagePath(id,fileName),"image/jpeg");
        }
    }
}
