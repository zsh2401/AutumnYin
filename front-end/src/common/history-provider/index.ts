import  { History,createBrowserHistory } from 'history'
import goc from '../global-object-container'
const KEY = "glh";
export default function get():History{
    let result = goc.get<History>(KEY);
    if(result){
        return result;
    }else{
        goc.put(KEY,createBrowserHistory());
        return get();
    }
}