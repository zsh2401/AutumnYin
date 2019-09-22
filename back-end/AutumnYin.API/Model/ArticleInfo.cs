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
        [JsonProperty("id")]
        public string Id { get; set; } = null;
        [JsonProperty("title")]
        public string Title { get; set; } = "无名字文章";
        [JsonProperty("author")]
        public string Author { get; set; } = "佚名";
        [JsonProperty("crt_time")]
        public int[] CreationTime { get; set; } = new int[] { 1999, 11, 25, 11, 25 };
        [JsonProperty("comment")]
        public bool EnableComment { get; set; } = true;
        [JsonProperty("summary")]
        public string Summary { get; set; } = null;
    }
}
