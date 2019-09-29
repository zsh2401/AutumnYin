import backapi from '../index'
import ISentence from '../../../model/ISentence';
export default class Sentence{
    private constructor(){}
    static getSentence(callback:(err:any,sentence:ISentence)=>void) 
    {
        fetch(backapi.API_URL_PREFIX + "/sentence")
        .then(response=>response.json())
        .then(json=>callback(null,json))
        .catch(err=>callback(err,null))
    }
}