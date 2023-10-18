import ActionType from "../action/ActionType";

const intialState = {
  login: [],
  message: "",
  status: "",
  refresh: "",
};

function LoginReducer(state = intialState, action: any) {
  const [type, payload] = action;
  console.log(action);

  switch (type) {
    case ActionType.RES_POST_LOGIN:
      return {
        state,
        login: payload,
        status: payload.status,
        refresh: true,
      };
    default:
      return state;
  }
}

export default LoginReducer;
