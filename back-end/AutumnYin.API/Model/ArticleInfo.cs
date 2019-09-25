using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    public class ArticleInfo
    {
        [JsonProperty("set_top")]
        public bool SetTop { get; set; } = false;
        [JsonProperty("id")]
        public string Id { get; set; } = null;
        [JsonProperty("title")]
        public string Title { get; set; } = "无名字文章";
        [JsonProperty("author")]
        public string Author { get; set; } = "佚名";
        [JsonProperty("img")]
        public string ImgUrl { get; set; } = null;
        [JsonProperty("reprint")]
        public string Reprint { get; set; } = null;
        [JsonProperty("hide")]
        public bool Hide { get; set; } = false;
        [JsonProperty("category")]
        public string CategroyCode { get; set; } = "yy";
        [JsonProperty("crt_time")]
        public string CreationTime { get; set; } = null;
        [JsonProperty("comment")]
        public bool EnableComment { get; set; } = true;
        [JsonProperty("summary")]
        public string Summary { get; set; } = null;
    }
}
