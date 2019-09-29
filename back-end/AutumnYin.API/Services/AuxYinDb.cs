using AutumnYin.API.Model;
using Microsoft.EntityFrameworkCore;

namespace AutumnYin.API.Services.ArticleService.DatabaseService
{
    public class AuxYinDb : DbContext
    {
        private const string CONNECTION_SQL = "Server=localhost;Port=19370;database=auxyin;uid=root;Password=6808412;CharSet=utf8;SslMode=None";
        public virtual DbSet<Article> Articles { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseMySql(CONNECTION_SQL);
        }
    }
}
