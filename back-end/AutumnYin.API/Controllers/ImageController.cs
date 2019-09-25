using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AutumnYin.API.Controllers
{
    [Route("image")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get() {
            return null;
        }
    }
}