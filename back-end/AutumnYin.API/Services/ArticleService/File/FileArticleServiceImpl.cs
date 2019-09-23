﻿using AutumnYin.API.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace AutumnYin.API.Services.ArticleService.File
{
    public class FileArticleServiceImpl : IArticleService
    {
        private const string IMG_RESOURCE_SERVER_PREFIX_FMT = "http://api.auxyin.com/article/aimg/{0}/";
        private readonly static Regex imgRegex = new Regex(@"\!\[(.*)\]\((?!http)(.+)\)", RegexOptions.Multiline | RegexOptions.Compiled);
        private const string IMG_RESOURCE_REPLACE_FMT = "![$1]({0}$2)";
        private DirectoryInfo articlesDir = new DirectoryInfo(@"D:\Source\AutumnYin\articles-fake-data");
        public string GetContentById(string id)
        {
            string path = Path.Combine(articlesDir.FullName, id, "index.md");
            using (var textReader = new FileInfo(path).OpenText())
            {
                return ReplaceImgString(textReader.ReadToEnd(), id);
            }
        }
        private static string ReplaceImgString(string markdownText, string aid)
        {
            string url = string.Format(IMG_RESOURCE_SERVER_PREFIX_FMT, aid);
            string replace = string.Format(IMG_RESOURCE_REPLACE_FMT, url);
            return imgRegex.Replace(markdownText, replace);
        }
        public string GetImagePath(string id, string fileName)
        {
            return Path.Combine(articlesDir.FullName, id,fileName);
        }

        public IEnumerable<ArticleInfo> GetIndex(string categroyCode, int startAt, int size)
        {
            var all = from articleDir in articlesDir.GetDirectories()
                      select GetInfoById(articleDir.Name);

            var orderedAndFiltedByCCode = from info in all
                                          orderby DateTime.Parse(info.CreationTime) descending
                                          where categroyCode == "all" || categroyCode == info.CategroyCode
                                          select info;

            var result = orderedAndFiltedByCCode.Skip(--startAt).Take(size);
            return result;
        }
        public ArticleInfo GetInfoById(string id)
        {
            var dir = new DirectoryInfo(Path.Combine(articlesDir.FullName, id));
            return new FileArticleInfoBuilder(dir).ToArticleInfo();
        }
    }
}
