using AutumnYin.API.Services.ArticleService.DatabaseService;
using Microsoft.AspNetCore.Mvc;

namespace AutumnYin.API.Controllers
{
    [Route("/")]
    [ApiController]
    public class InitController : ControllerBase
    {
        private readonly AuxYinDb dbContext;
        public InitController(AuxYinDb dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public void Get()
        {
            using (dbContext)
            {
                dbContext.Database.EnsureCreated();
            }
        }
    }
}
