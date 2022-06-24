import { render } from "@testing-library/react";
import { ICommonUser } from "../commonInterfaces/user.interfaces";
import { App } from "./app";

const user: ICommonUser = {
  username: "123123",
  id: "123",
};

describe("renders learn react link", () => {
  test("header is on board", () => {
    const app = render(<App user={user} />);
    const header = app.getByRole("heading");

    expect(header).toBeInTheDocument();
  });

  test("main is on board", () => {
    const app = render(<App user={user} />);
    const main = app.getByRole("main");

    expect(main).toBeInTheDocument();
  });

  test("nav is on board", () => {
    const app = render(<App user={user} />);
    const nav = app.getByRole("nav");

    expect(nav).toBeInTheDocument();
  });

  test("user type is in the document", () => {
    const app = render(<App user={user} />);
    const managerBlock = app.getByText("manager");

    expect(managerBlock).toBeInTheDocument();
  });
});
