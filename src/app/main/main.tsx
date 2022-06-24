import { useContext } from "react";
import { UserType } from "../../commonInterfaces/user.interfaces";
import { UserRoleContext } from "../app";

export const Main: React.FC = () => {
  const [role, setRole] = useContext(UserRoleContext);
  return (
    <main
      role="main"
      onClick={() => {
        setRole?.(UserType.MANAGER);
      }}
    >
      {role} main
    </main>
  );
};
