import IArticle from "../../model/Article";
import $ from "jquery"
import debugmx from '../../common/debug-mx'
export default class ArticleApi{
    private static readonly API_URL = debugmx.isDev ? "https://localhost:44305/" : "https://api.auxyin.com:1937/";
    static fetchArticle(id:number,callback:(err:any,article:IArticle)=>void){
        let url = this.API_URL + "article/" + id;
        fetch(url)
        .then(response=>response.json())
        .then(json=>callback(null,json))
        .catch(err=>callback(err,null));
    }
    static fetchArticleIndex(callback:(err:any,result:IArticle[])=>void,categoryCode:string="all",startAt:number=0,size:number=10){
        let url = this.API_URL + "article?categoryCode=" + categoryCode + "&startAt=" + startAt + "&size=" + size;
        fetch(url)
        .then(response=>response.json())
        .then(json=>callback(null,json))
        .catch(err=>callback(err,null))
    }
}