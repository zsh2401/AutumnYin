import RMeScrollPage from "./RMeScrollPage";
export default interface RMeScrollProps{
    downCallback?:()=>void;
    upCallback?:(page:RMeScrollPage)=>void;
}