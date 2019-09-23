using AutumnYin.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Services.ArticleService
{
    public interface IArticleService
    {
        string GetContentById(string id);
        IEnumerable<ArticleInfo>  GetIndex(string categroyCode,int startAt,int size);
        ArticleInfo GetInfoById(string id);
        string GetImagePath(string id, string fileName);
    }
}
