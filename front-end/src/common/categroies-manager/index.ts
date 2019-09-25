export interface ICategroies{
    [code:string]:string;
}
const __data:ICategroies = {"zed":"单言","default":"最新","tec":"科技"};
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