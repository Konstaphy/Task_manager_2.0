import React from "react";
import { Header } from "./header/header";
import { Main } from "./main/main";
import { Nav } from "./nav/nav";
import { useStore } from "effector-react";
import { AppStore } from "../stores/app";

export const App: React.FC = () => {
  const $appStore = useStore(AppStore);
  return (
    <div className="App">
      <Header />
      <Main />
      <Nav />
      {$appStore.currentUser?.username}
    </div>
  );
};
