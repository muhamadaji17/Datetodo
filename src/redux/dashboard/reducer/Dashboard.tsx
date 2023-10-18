import ActionType from "../action/ActionType";

const initialState = {
  Films: [],
  // daftarapply: [],
  message: "",
  status: "",
  refresh: "",
};

function DashboardReducer(state = initialState, action: any) {
  let { type, payload } = action;

  switch (type) {
    case ActionType.RES_GET_FILM:
      return {
        state,
        Films: payload.data.results,
        // poster: payload.status,
        // message: payload.message,
        refresh: true,
      };
    default:
      return state;
  }
}

export default DashboardReducer;
