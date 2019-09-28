using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    public class Article
    {
        [ Required,Key, JsonProperty("id")]
        public string Id { get; set; }
        [DefaultValue(false),JsonProperty("set_top")]
        public bool SetTop { get; set; }
        [DefaultValue(null),JsonProperty("title")]
        public string Title { get; set; }
        [DefaultValue(null),JsonProperty("author")]
        public string Author { get; set; }
        [DefaultValue(null), JsonProperty("img")]
        public string ImgUrl { get; set; }
        [DefaultValue(null), JsonProperty("reprint")]
        public string Reprint { get; set; }
        [DefaultValue(false), JsonProperty("hide")]
        public bool Hide { get; set; }
        [Required,JsonProperty("category")]
        public Category Category { get; set; } 
        [DefaultValue(null),Required,JsonProperty("crt_time")]
        public string CreationTime { get; set; } 
        [DefaultValue(true), JsonProperty("comment")]
        public bool EnableComment { get; set; } = true;
        [DefaultValue(null), MaxLength(15),JsonProperty("summary")]
        public string Summary { get; set; } = null;
        [Required, JsonProperty("content")]
        public string Content { get; set; }
    }
}
