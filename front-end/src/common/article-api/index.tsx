import IArticle from "../../model/Article";
import debugmx from '../../common/debug-mx'
export default class ArticleApi{
    private static readonly API_URL = debugmx.isDev ? "https://localhost:44305/" : "https://api.auxyin.com:1937/";
    static postArticle(article:IArticle, callback:(status_code:number)=>void){
        let url = this.API_URL + "article";
        fetch(url,{method:"POST",body:JSON.stringify(article)})
        .then(response=>response.text().then(text=>callback(parseInt(text))))
        .catch((err)=>{console.log(err);callback(-1)});
    }
}