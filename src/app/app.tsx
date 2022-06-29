import React from "react";
import { Header } from "app/header/header";
import { Main } from "app/main/main";
import { Nav } from "app/nav/nav";
import { useStore } from "effector-react";
import { $app } from "stores/appStore";
import "styles/app.scss";

export const App: React.FC = () => {
  const appState = useStore($app);
  return (
    <>
      <Header />
      <Main />
      <Nav />
      {appState.currentUser?.username}
    </>
  );
};
