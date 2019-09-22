import INewsBrief from "../../model/INewsBrief";
import { INews } from "../../model/INews";
import idg from "../id-generator";

export interface GetOptions{
    categroyCode?:string;
    startAt?:number;
    count?:number;
}
export function getIndex(options:GetOptions = {categroyCode:"default",startAt:0,count:10}):Promise<INewsBrief[]>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {title:idg(),id:idg(),author:"zsh2401","brief":"aaa",time:"aaa"}
            ]);
        },1000);
    });
}
export function getNewsById(id:string):Promise<INews>{
    throw "Not Impl";
}