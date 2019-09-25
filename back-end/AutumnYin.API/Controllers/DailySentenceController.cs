using AutumnYin.API.Model;
using Microsoft.AspNetCore.Mvc;

namespace AutumnYin.API.Controllers
{
    [Route("sentence")]
    [ApiController]
    public class DailySayingController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Sentence> Get() {
            return new Sentence() { };
        }
    }
}