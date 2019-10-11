import React from 'react'
import ReactDOM from 'react-dom/server'
const AppPage = <html lang="zh">
        <head>
            <title>秋隐</title>
            <meta charSet='utf-8'></meta>
            <link rel="apple-touch-icon" sizes="256x256" href="app_icon.png"></link>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"></meta>
            <link rel="manifest" href="/manifest.json"></link>
            <meta name="apple-mobile-web-app-status-bar-style" content="white"></meta>

            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mescroll.js@1.4.1/mescroll.min.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/mescroll.js@1.4.1/mescroll.min.js" charSet="utf-8"></script> */}

            {/* <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>

            <script src="https://cdn.bootcss.com/react/16.9.0-rc.0/umd/react.production.min.js"></script>
            <script src="https://cdn.bootcss.com/react-dom/16.9.0-rc.0/umd/react-dom.production.min.js"></script>
            <script src="https://cdn.bootcss.com/react-router-dom/5.0.1/react-router-dom.min.js"></script>

            <link href="https://cdn.bootcss.com/Swiper/4.5.1/css/swiper.min.css" rel="stylesheet"></link>
            <script src="https://cdn.bootcss.com/Swiper/4.5.1/js/swiper.min.js"></script>

            <link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"></ link>
            <script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <link href="https://cdn.bootcss.com/rsuite/4.0.0/styles/rsuite-default.min.css" rel="stylesheet"></link>
            <script src="https://cdn.bootcss.com/rsuite/4.0.0/rsuite.min.js"></script>

            <script src="//cdn.jsdelivr.net/npm/leancloud-storage@3.15.0/dist/av-min.js"></script>
            <script src='//unpkg.com/valine/dist/Valine.min.js'></script>

            <script src="https://cdn.bootcss.com/marked/0.7.0/marked.min.js"></script> */}

            </head>
            <body>
                <div id="app" style={{height:"100%",width:"100%",position: "fixed"}}>Loading</div>
            </body>
    </html>
    
export default function(props){
    return ReactDOM.renderToString(AppPage)
}