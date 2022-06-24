import { useContext } from "react";
import { UserRoleContext } from "../app";

export const Nav = () => {
  const [role] = useContext(UserRoleContext);
  return <nav role="nav">{role} nav</nav>;
};
