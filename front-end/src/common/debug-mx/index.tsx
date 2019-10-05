
declare const isDev:boolean;
declare const COMPILED_TIME:string;
const KEY_FAPP = "first_launch";
export default class DebugMx{
    static get isDev():boolean{
        return process.env.NODE_ENV != 'production';
    }
    static get compiledTime():string{
        return COMPILED_TIME;
    }
    static get isFirstTimeLaunchApp():boolean{
        return localStorage.getItem(KEY_FAPP) == null || localStorage.getItem(KEY_FAPP) == undefined;
    }
    static set isFirstTimeLaunchApp(value:boolean){
        if(value){
            localStorage.removeItem(KEY_FAPP);
        }else{
            localStorage.setItem(KEY_FAPP,"www");
        }    
    }
}