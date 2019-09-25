using Newtonsoft.Json;

namespace AutumnYin.API.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    public class Sentence
    {
        [JsonProperty("content")]
        public string Content { get; set; }
        [JsonProperty("desc")]
        public string Description { get; set; }
        [JsonProperty("img")]
        public string ImageSource { get; set; }
    }
}
