import { Provider } from "react-redux";
import store from "./storeGlobal";

const Provider1 = (children: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Provider1;
