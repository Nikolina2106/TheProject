using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TheProject.Controllers
{
    [Route("images")]
    public class ImageController : Controller
    {
        [HttpPost]
        public IActionResult Upload ([FromForm]IFormFile file)
        {
            using(var stream = new FileStream("path do slike", FileMode.Create))
            {
                file.CopyTo(stream);
            }

            return Ok();
        }
    }
}
