using AutumnYin.API.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AutumnYin.API.Services.ArticleService.File
{
    public class FileArticleInfoBuilder
    {
        private const string INFO_JSON_NAME = "info.json";
        private readonly DirectoryInfo dirInfo;
        public FileArticleInfoBuilder(DirectoryInfo dirInfo)
        {
            this.dirInfo = dirInfo;
        }
        public ArticleInfo ToArticleInfo()
        {
            ArticleInfo result = null;
            string path = Path.Combine(dirInfo.FullName, INFO_JSON_NAME);
            using (var reader = new FileInfo(path).OpenText())
            {
                result = JsonConvert.DeserializeObject<ArticleInfo>(reader.ReadToEnd());
            }
            result.Id = dirInfo.Name;
            InitCreationTime(result);
            InitSummary(result);
            CompleteImgUrl(result);
            return result;
        }
        private void CompleteImgUrl(ArticleInfo info)
        {
            if (info.ImgUrl == null)
            {
                info.ImgUrl = null;
            }
            else if (!(info.ImgUrl.StartsWith("http://") || info.ImgUrl.StartsWith("https://")))
            {
                info.ImgUrl = string.Format("http://dream.zsh2401.top:9527/article/aimg/{0}/{1}", info.Id, info.ImgUrl);
            }
        }
        private void InitCreationTime(ArticleInfo info)
        {
            if (info.CreationTime == null)
            {
                info.CreationTime = dirInfo.CreationTime.ToString("yyyy-MM-dd HH:mm:ss");
            }
        }
        private void InitSummary(ArticleInfo info)
        {
            if (info.Summary == null)
            {
                using (var reader = new FileInfo(Path.Combine(dirInfo.FullName, "index.md")).OpenText())
                {
                    var content = reader.ReadToEnd();
                    if (content.Length > 15)
                    {
                        info.Summary = content.Substring(0, 15) + "...";
                    }
                    else
                    {
                        info.Summary = content.Substring(0, content.Length - 1);
                    }
                }
            }
        }
    }
}
