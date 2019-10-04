export interface ICateogoryViewBaseState{
    status:"ok" | "error" | "loading";
}
export function getDefaultState():ICateogoryViewBaseState{
    return {
        status:"loading"
    }
}