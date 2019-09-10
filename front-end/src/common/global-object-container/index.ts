export default {
    put,
    get,
}
function put(key:string,value:any){
    (<any>window)[generateKeyName(key)] = value;
}
function get<TRet>(key:string):TRet{
    return (<any>window)[generateKeyName(key)];
}
function generateKeyName(srcKey:string){
    return "_LiYin_goc_" + srcKey;
}
