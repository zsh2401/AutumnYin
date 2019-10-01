using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutumnYin.API.Model;
using AutumnYin.API.Services.ArticleService.DatabaseService;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AutumnYin.API.Controllers
{
    [Route("circular")]
    public class CircularController : Controller
    {
        private readonly AuxYinDb db;

        public CircularController(AuxYinDb db)
        {
            this.db = db;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<CircularItem> Get()
        {
            using (db)
            {
                return from circularItem in db.Circular
                       where circularItem.Enable
                       select circularItem;
            }
        }
    }
}
