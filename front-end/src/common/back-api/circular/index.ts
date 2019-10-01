import ICircularItem from '../../../model/ICircularItem'
import backapi from '../'
function getCircular(callback:(err:any,result:Array<ICircularItem>)=>void){
    let url = backapi.API_URL_PREFIX + "/circular";
    fetch(url)
    .then(response=>response.json())
    .then(json=>callback(null,json))
    .catch(err=>callback(err,null))
}

export default {
    getCircular
}
