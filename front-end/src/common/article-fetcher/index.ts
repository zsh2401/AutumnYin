import IArticleInfo from "../../model/IArticleInfo";
import goc from '../../common/global-object-container'
export declare type MarkDownText = string;
export const DEFAULT_API_PREFIX = "https://api.yuxyin.com/article/"
export default class ArticleFetcher{
    constructor(private dftApiPrefix:string=DEFAULT_API_PREFIX){}
    fetchArticleIndex(startAt:number=0,size:number=10,categoryCode:string="all"):Promise<IArticleInfo[]>{
        return new Promise((resolve,reject)=>{
            fetch(this.dftApiPrefix + "index/?startat=" + startAt +"&size=" + size + "&ccode=" + categoryCode)
            .then(response=>response.json().then(json=>{
                resolve(json);
            }).catch(err=>reject(err)))
            .catch(err=>reject(err))
        });
    }
    fetchArticleContentById(aid:string):Promise<MarkDownText>{
        return new Promise((resolve,reject)=>{
            fetch(this.dftApiPrefix + "mdcontent/" + aid)
            .then(response=>response.text().then(text=>{
                resolve(text);
            }).catch(err=>reject(err)))
            .catch(err=>reject(err))
        });
    }
    fetchArticleInfoById(aid:string):Promise<IArticleInfo>{
        return new Promise((resolve,reject)=>{
            fetch(this.dftApiPrefix + "info/" + aid)
            .then(response=>response.json().then(json=>{
                resolve(json);
            }).catch(err=>reject(err)))
            .catch(err=>reject(err))
        });
    }
}
export function instance(){
    if(!goc.get<ArticleFetcher>("gaf")){
       goc.put("gaf",new ArticleFetcher());
    }
    return goc.get<ArticleFetcher>("gaf")
}