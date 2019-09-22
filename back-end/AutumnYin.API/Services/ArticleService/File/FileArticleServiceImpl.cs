using AutumnYin.API.Model;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace AutumnYin.API.Services.ArticleService.File
{
    public class FileArticleServiceImpl : IArticleService
    {
        private DirectoryInfo articlesDir = new DirectoryInfo(@"D:\Source\AutumnYin\articles-fake-data");
        public string GetContentById(string id)
        {
            string path = Path.Combine(articlesDir.FullName, id, "index.md");
            using (var textReader = new FileInfo(path).OpenText())
            {
                return textReader.ReadToEnd();
            }
        }
        
        public IEnumerable<ArticleInfo> GetIndex(string categroyCode, int startAt, int size)
        {
            return from articleDir in articlesDir.GetDirectories()
                   select GetInfoById(articleDir.Name);
        }
        public ArticleInfo GetInfoById(string id)
        {
            var dir = new DirectoryInfo(Path.Combine(articlesDir.FullName, id));
            return new FileArticleInfoBuilder(dir).ToArticleInfo();
        }
    }
}
