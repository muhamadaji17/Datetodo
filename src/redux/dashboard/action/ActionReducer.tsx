import ActionType from "./ActionType";

export const reqGetFilm = () => {
  return {
    type: ActionType.REQ_GET_FILM,
  };
};
export const resGetFilm = (payload: any) => {
  return {
    type: ActionType.RES_GET_FILM,
    payload,
  };
};
