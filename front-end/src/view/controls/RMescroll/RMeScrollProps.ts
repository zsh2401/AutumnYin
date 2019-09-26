import RMeScrollPage from "./RMeScrollPage";
import { CSSProperties } from "react";
export default interface RMeScrollProps{
    height?:string;
    downCallback?:()=>void;
    upCallback?:(page:RMeScrollPage)=>void;
}