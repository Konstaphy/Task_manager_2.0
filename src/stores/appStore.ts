import { createEvent, createStore } from "effector";
import { IAppConfiguration } from "../models/app.interface";
import { ICommonUser, UserType } from "../models/user.interfaces";

export const $app = createStore<IAppConfiguration>({
  currentUser: {
    id: "21312436436345",
    username: "Konstantine",
    role: UserType.CLIENT,
  },
});

const setCurrentUser = (
  state: IAppConfiguration,
  data: ICommonUser
): IAppConfiguration => {
  return {
    ...state,
    currentUser: data,
  };
};

export const changeCurrentUser = createEvent<ICommonUser>();

$app.on(changeCurrentUser, setCurrentUser);
