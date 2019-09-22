import IArticle from '../../model/IArticle'
const API_PREFIX = "https://api.yuxyin.com/"
export function fetchArticle(aid:string):Promise<IArticle>{
    return new Promise((resolve,reject)=>{
        fetch(getUrlById(aid))
        .then(
            response=>response.json()
                .then((jsonResult)=>resolve(jsonResult as IArticle)))
                .catch(err=>reject(err))
        .catch((err)=>reject(err))
    });
}
function getUrlById(aid:string){
    return API_PREFIX  + "/p/" + aid;
}