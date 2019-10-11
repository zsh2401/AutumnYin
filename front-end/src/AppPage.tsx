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

            </head>
            <body>
                <div id="app" className="h-100 w-100 position-fixed">Loading</div>
            </body>
    </html>
    
export default function(props){
    return ReactDOM.renderToString(AppPage)
}