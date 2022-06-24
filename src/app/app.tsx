import React, { useState } from "react";
import { ICommonUser, UserType } from "../commonInterfaces/user.interfaces";
import { Header } from "./header/header";
import { Main } from "./main/main";
import { Nav } from "./nav/nav";

interface IAppProps {
  user: ICommonUser;
}

export const UserRoleContext = React.createContext<
  Partial<[UserType, React.Dispatch<React.SetStateAction<UserType>>]>
>([]);

export const App: React.FC<IAppProps> = () => {
  return (
    <UserRoleContext.Provider value={useState<UserType>(UserType.CLIENT)}>
      <div className="App">
        <Header />
        <Main />
        <Nav />
      </div>
    </UserRoleContext.Provider>
  );
};
