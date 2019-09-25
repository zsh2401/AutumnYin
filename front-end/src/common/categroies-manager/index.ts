export interface ICategroies{
    [code:string]:string;
}
const __data:ICategroies = {"zed":"单言","all":"最新","game":"游戏","en_article":"英读","says":"言叶之庭","animate":"动漫"};
export default function():ICategroies{
    return __data;
}
export function getNamesOnly():Array<string>{
    let names = []
    for(let code in __data){
        names.push(__data[code])
    }
    return names;
}
export function getCodesOnly():Array<string>{
    let codes = []
    for(let code in __data){
        codes.push(code)
    }
    return codes;
}