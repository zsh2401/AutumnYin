using System;
using System.Collections.Generic;
using System.Linq;
using AutumnYin.API.Model;
using AutumnYin.API.Services;
using AutumnYin.API.Services.ArticleService;
using AutumnYin.API.Services.ArticleService.DatabaseService;
using Microsoft.AspNetCore.Mvc;

namespace AutumnYin.API.Controllers
{
    [Route("article")]
    [ApiController]
    public class ArticleApiController : ControllerBase
    {
        private readonly AuxYinDb dbContext;

        public ArticleApiController(AuxYinDb dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Article>> IndexGet([FromQuery]string categoryCode = "all", [FromQuery]int startAt = 0, [FromQuery] int size = 10)
        {
            using (dbContext)
            {
                var articles = from info in dbContext.Articles
                               orderby info.CreationTime descending
                               orderby info.SetTop descending
                               where categoryCode == "all" || categoryCode == info.Category.Id
                               where !info.Hide
                               select CutOffContent(info);

                articles = articles.Skip(startAt).Take(size);

                return articles.ToArray();
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Article> Get(int id)
        {
            using (dbContext)
            {
                var query = (from articleInfo in dbContext.Articles
                             where articleInfo.Id == id
                             select articleInfo);
                if (query.Any())
                {
                    return query.First();
                }
                else
                {
                    this.Response.StatusCode = 404;
                    return null;
                }
            }
        }

        private static Article CutOffContent(Article article)
        {
            article.Content = null;
            return article;
        }
    }
}
