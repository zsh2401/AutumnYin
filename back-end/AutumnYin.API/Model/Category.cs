using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AutumnYin.API.Model
{
    public class Category
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }

        public List<Article> Articles { get; set; }
    }
}
