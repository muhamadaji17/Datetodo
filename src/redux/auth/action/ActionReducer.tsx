import ActionType from "./ActionType"

export const REQ_LOGIN = (payload:any) => {
    return {
        type: ActionType.REQ_POST_LOGIN,
        payload
    }
}
export const RES_LOGIN = (payload:any) => {
    return {
        type: ActionType.RES_POST_LOGIN,
        payload
    }
}