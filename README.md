# 秋隐
一个简单的资讯PWA应用
#### 为什么叫这个名字?
秋是主要开发者最爱的季节,而隐是主要开发者最爱的人.将这两个字组合起来,谐音蚯蚓,寓意着我们会像蚯蚓一样不断发掘有用有趣的新闻
## 前端(front-end)
一个响应式的,渐进式WEB应用,提供了咨询展示,评论系统等功能,使用SPA技术达到无缝切换的体验。

注意:前端暂未进行SEO处理,无法被搜索引擎正常爬取
#### 前端技术栈
* react
* react-router
* bootstrap 4
* jQuery
* Valine评论系统
* TypeScript
* webpack
* HTML5+CSS
* Markdown
#### 生成前端代码
进入front-end文件夹
1. 安装依赖
    ```
    npm install
    ```
2. 使用webpack打包
    ```
    npm run build
    ```

此时,你就可以在<code>front-end/dist</code>文件夹中看到生成完毕的应用   
另外,可以通过<code>npm run dev</code>进行实时调试(webpack-dev-server)

## 后端(back-end)
与数据库进行交互,为前端应用提供文章等数据
#### 后端技术栈
* Dot Net Core 2.2
* Dot Net Asp Core
* Entity Framework Core
* MySql
* phpmyadmin

#### 生成后端代码
进入back-end文件夹
1. 使用<code>Visual Studio 2019</code>打开<code>AutumnYin_BackEnd.sln</code>
2. 直接生成即可
