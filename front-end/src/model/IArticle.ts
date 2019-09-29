export default interface IArticle{
    id:number;
    set_top:boolean;
    title?:string;
    author?:string;
    img?:string;
    reprint?:string;
    hide:boolean;
    category:string;
    crt_time?:string;
    comment:boolean;
    summary?:string;
    content?:string;
}