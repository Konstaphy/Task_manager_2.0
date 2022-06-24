import React, { useContext } from "react";
import { UserRoleContext } from "../app";

export const Header: React.FC = () => {
  const [role] = useContext(UserRoleContext);
  return <header role="heading">{role} header</header>;
};
