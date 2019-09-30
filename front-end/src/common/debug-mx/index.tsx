
declare const isDev:boolean;
declare const COMPILED_TIME:string;
export default class DebugMx{
    static get isDev():boolean{
        return process.env.NODE_ENV != 'production';
    }
    static get compiledTime():string{
        return COMPILED_TIME;
    }
}