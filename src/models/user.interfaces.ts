export interface ICommonUser {
  // Идентификаторы юзера
  id: string;
  username: string;

  role: UserType;
}

export enum UserType {
  CLIENT = "client",
  AGENT = "agent",
}
