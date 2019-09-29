using AutumnYin.API.Model;
using AutumnYin.API.Services.ArticleService.DatabaseService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace AutumnYin.API.Controllers
{
    [ApiController]
    [Route("sentence")]
    public class SentenceApiController
    {
        private readonly AuxYinDb db;

        public SentenceApiController(AuxYinDb db)
        {
            this.db = db ?? throw new System.ArgumentNullException(nameof(db));
        }
        [HttpGet]
        public ActionResult<Sentence> Get()
        {
            using (db)
            {
                var query = from s in db.Sentences
                            orderby Guid.NewGuid()
                            where s.Enable
                            select s;
                if (query.Any())
                {
                    int ranId = new Random().Next(1, query.Count() + 1);
                    return (from q in query
                                 where q.Id == ranId
                                 select q).First();
                }
                else {
                    return new Sentence()
                    {
                        Id = 0,
                        Content = "总有一天,冰会化成水的",
                        Description = "There will be a day,when ice turns into water",
                        ImgUrl = ""
                    };
                }
            }
        }
    }
}
