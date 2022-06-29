import React, { useState } from "react";
import { changeCurrentUser } from "../../stores/appStore";
import { UserType } from "../../models/user.interfaces";
import { Logo } from "../../sharedComponents/logo/logo";

export const Header: React.FC = () => {
  return (
    <header
      className="app__header"
      onClick={() =>
        changeCurrentUser({
          id: "123",
          role: UserType.CLIENT,
          username: "hellohuy",
        })
      }
    >
      <Logo />
    </header>
  );
};
