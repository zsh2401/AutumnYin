using AutumnYin.API.Model;
using Microsoft.EntityFrameworkCore;

namespace AutumnYin.API.Services.ArticleService.DatabaseService
{
    public class AuxYinDb : DbContext
    {
        private const string CONNECTION_SQL = "Server=api.auxyin.com;Port=19370;database=auxyin;uid=aux_reader;Password=auxyin_reader;CharSet=utf8;SslMode=None";
        public virtual DbSet<Article> Articles { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Sentence> Sentences { get; set; }
        public virtual DbSet<CircularItem> Circular { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseMySql(CONNECTION_SQL);
        }
    }
}
