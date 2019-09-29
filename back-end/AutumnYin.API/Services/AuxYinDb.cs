using AutumnYin.API.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Services.ArticleService.DatabaseService
{
    public class AuxYinDb : DbContext
    {
        private const string CONNECTION_SQL = "Server=localhost;database=auxyin;uid=root;Password=6808412;CharSet=utf8;SslMode=None";
        public virtual DbSet<Article> Articles { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseMySql(CONNECTION_SQL);
        }
    }
}
