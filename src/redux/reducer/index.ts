import ActionType from "../action/ActionType";

const initialState = {
    dataGetRange : [],
    refresh : false
}

function dateTodo(state = initialState, action:any){
    let {type, payload} = action

    switch (type) {
        case ActionType.RES_GET_DATE_RANGE:
            return{
                state,
                dataGetRange: payload.payload,
                refresh: true
            }
        default:
            return state;
    }
}

export default dateTodo