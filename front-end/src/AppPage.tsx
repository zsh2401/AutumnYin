import React from 'react'
import ReactDOM from 'react-dom/server'
class AppPage extends React.Component{
    render(){
        return <html lang="zh">
        <head>
            <title>秋隐</title>
            <meta charSet='utf-8'></meta>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"></meta>
            <link rel="manifest" href="/manifest.json"></link>
            <meta name="apple-mobile-web-app-status-bar-style" content="white"></meta>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mescroll.js@1.4.1/mescroll.min.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/mescroll.js@1.4.1/mescroll.min.js" charSet="utf-8"></script>
            </head>
            <body>
                <div id="app" style={{height:"100%",width:"100%",position: "fixed"}}></div>
            </body>
    </html>
    }
}
export default function(props){
    return ReactDOM.renderToString(<AppPage/>)
}