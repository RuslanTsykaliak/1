// types/type.ts

export type ParamsType = {
  name: string;
  post: string;
}

export type TodoType = {
  id: number;
  title: string;
  description: string;
  complete: boolean;
  mongoId: string;
  deleteTodo: (id: string) => Promise<void>;
  completeTodo: (id: string) => Promise<void>;
}

export type TodoData = {
  title: string;
  description: string;
  isCompleted: boolean;
  _id: string;
};
