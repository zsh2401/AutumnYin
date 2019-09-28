using AutumnYin.API.Services.ArticleService.DatabaseService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Controllers
{
    [Route("/api/values")]
    [ApiController]
    public class IndexController : ControllerBase
    {
        private readonly AuxYinDb dbContext;
        public IndexController(AuxYinDb dbContext)
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
