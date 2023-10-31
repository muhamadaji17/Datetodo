import ActionType from "./ActionType"

export const reqGetDateRange = () =>{
    return{
        type : ActionType.REQ_GET_DATE_RANGE
    }
}
export const resGetDateRange = (payload:any) =>{
    return{
        type : ActionType.RES_GET_DATE_RANGE,
        payload
    }
}
