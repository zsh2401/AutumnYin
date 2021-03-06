﻿using Newtonsoft.Json;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutumnYin.API.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    public class Article
    {
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Identity), Key, JsonProperty("id")]
        public int Id { get; set; }
        [DefaultValue(false), JsonProperty("set_top")]
        public bool SetTop { get; set; }
        [DefaultValue(null), MaxLength(30),Required, JsonProperty("title")]
        public string Title { get; set; }
        [DefaultValue(null), Required, MaxLength(10),JsonProperty("author")]
        public string Author { get; set; }
        [DefaultValue(null), MaxLength(1000),Required, JsonProperty("img")]
        public string ImgUrl { get; set; }
        [DefaultValue(null), MaxLength(15),JsonProperty("reprint")]
        public string Reprint { get; set; }
        [DefaultValue(false), JsonProperty("hide")]
        public bool Hide { get; set; }
        [Required, JsonProperty("crt_time")]
        public virtual DateTime CreationTime { get; set; }
        [DefaultValue(true), JsonProperty("comment")]
        public bool EnableComment { get; set; } = true;
        [DefaultValue(null), MaxLength(40), JsonProperty("summary")]
        public string Summary { get; set; } = null;
        [Required, JsonProperty("content")]
        public string Content { get; set; }
        [Required, JsonProperty("category")]
        public string CategoryId { get; set; }
        [JsonIgnore]
        public virtual Category Category { get; set; }
    }
}
