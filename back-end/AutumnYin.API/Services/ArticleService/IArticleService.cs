using AutumnYin.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Services.ArticleService
{
    public interface IArticleService
    {
        IEnumerable<ArticleInfo>  GetAllArticle();
        ArticleInfo GetInfoById(string id);
        string GetContentById(string id);
        string GetFile(string id, string fileName);
    }
}
