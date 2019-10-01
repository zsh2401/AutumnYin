using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    public class CircularItem
    {
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Identity), Key, JsonProperty("id")]
        public int Id { get; set; }
        [Required,JsonProperty("img_src")]
        public string ImgSrc { get; set; }
        [Required,JsonIgnore]
        public bool Enable { get; set; }
        [Required,JsonProperty("target")]
        public string Traget { get; set; }
    }
}
