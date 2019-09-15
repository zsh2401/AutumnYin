<h1 style="text-align:center">秋隐 AtuYin.com</h1>
<h4 style="text-align:center">一个简单的资讯PWA应用</h4>


#### 为什么叫这个名字?
秋是最美好的季节,隐最美好的女孩.  
而秋隐谐音蚯蚓,寓意着我们会像蚯蚓一样不断发掘有用有趣的新闻

## 前端 front-end
一个典型的HTML5+SPA+PWA应用,通过fetch与后端进行交互并展示新闻资讯

*注意:前端暂未进行SEO处理,无法被搜索引擎正常爬取*

#### 前端主要技术
* webpack
* React/React Router
* TypeScript
* HTML5/CSS3
* Single Page Application
* Progressive Web Application

#### 前端依赖
* [react](https://github.com/facebook/react)
* [react-router](https://github.com/ReactTraining/react-router)
* [Bootstrap 4](https://github.com/twbs/bootstrap)
* [jQuery](https://github.com/jquery/jquery)
* [Valine](https://github.com/xCss/Valine)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [webpack](https://github.com/webpack/webpack)
* [Marked.js](https://marked.js.org/)
* [Swiper.js](https://github.com/nolimits4web/swiper)
* [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
* [mescroll](https://github.com/mescroll/mescroll)

#### 编译前端代码
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

## 后端 back-end
与数据库进行交互,为前端应用提供文章等数据的接口
#### 主要技术
* .net core
* .net ef core
* .net core asp
#### 后端依赖
* .net core 2.2
* .net core asp 2.2
* .net ef core 2
* MySql
* Newtonsoft.Json

#### 编译后端代码
进入back-end文件夹
1. 使用<code>Visual Studio 2019</code>打开<code>AutumnYin_BackEnd.sln</code>
2. 直接<code>F5</code>生成即可
