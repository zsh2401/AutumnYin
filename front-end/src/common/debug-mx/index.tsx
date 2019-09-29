
declare const isDev:boolean;
export default class DebugMx{
    static get isDev():boolean{
        return process.env.NODE_ENV != 'production';
    }
}