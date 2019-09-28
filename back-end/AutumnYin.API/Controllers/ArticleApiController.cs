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
        public override AcceptedResult Accepted()
        {
            this.Response.Headers["Access-Control-Allow-Origin"] = "*";
            return base.Accepted();
        }

        [HttpGet("list")]
        public ActionResult<IEnumerable<Article>> IndexGet([FromQuery]string categoryCode = "all", [FromQuery]int startAt = 0, [FromQuery] int size = 10)
        {
            using (dbContext)
            {
                dbContext.Database.EnsureCreated();
                var articles = from info in dbContext.Articles
                               orderby DateTime.Parse(info.CreationTime) descending
                               orderby info.SetTop descending
                               where categoryCode == "all" || categoryCode == info.Category.Id
                               where !info.Hide
                               select CutOffContent(info);

                articles = articles.Skip(startAt).Take(size);

                return articles.ToArray();
            }
        }
        private static Article CutOffContent(Article article)
        {
            article.Content = null;
            return article;
        }

        [HttpGet("{id}")]
        public ActionResult<Article> Get(int id)
        {
            using (dbContext)
            {
                dbContext.Database.EnsureCreated();
                return (from articleInfo in dbContext.Articles
                        where articleInfo.Id == id
                        select articleInfo).FirstOrDefault();
            }
        }

        [HttpPost]
        public ActionResult<int> UpdateArticle([FromBody]Article info)
        {
            try
            {
                using (dbContext)
                {
                    var article = dbContext.Articles.Single(a=>a.Id == info.Id);
                    return 0;
                }
            }
            catch (Exception)
            {
                return 1;
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<int> DeleteArticle(int id)
        {
            try
            {
                using (dbContext)
                {
                    var target = from a in dbContext.Articles
                                where a.Id == id
                                select a;
                    var article = dbContext.Articles.Remove(target.First());
                    return 0;
                }
            }
            catch (Exception)
            {
                return 1;
            }
        }
    }
}
