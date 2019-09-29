using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutumnYin.API.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    public class Sentence
    {
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Identity), Key, JsonProperty("id")]
        public int Id { get; set; }
        [Required,JsonProperty("img")]
        public string ImgUrl { get; set; }
        [Required, JsonProperty("desc")]
        public string Description { get; set; }
        [Required,JsonProperty("content")]
        public string Content { get; set; }
    }
}
