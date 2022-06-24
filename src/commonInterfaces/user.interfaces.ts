export interface ICommonUser {
  // Идентификаторы юзера
  id: string;
  username: string;
}

export enum UserType {
  MANAGER = "manager",
  CLIENT = "client",
}
