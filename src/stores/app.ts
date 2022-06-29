import { createStore } from "effector";
import { IAppConfiguration } from "../models/app.interface";
import { UserType } from "../models/user.interfaces";

export const AppStore = createStore<IAppConfiguration>({
  currentUser: {
    id: "21312436436345",
    username: "Konstantine",
    role: UserType.CLIENT,
  },
});
