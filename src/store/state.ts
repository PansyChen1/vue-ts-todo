export enum Mode {
  edit, //处于编辑状态
  finish //处于完成状态
}
export interface TodoItem {
  id: string; //todo任务的id
  name: string; //todo任务名称
  isDone: boolean;
  iconName: string; //任务的图标
  color: string; //任务底色
  mode: Mode;
}
export interface State {
  todoList: Array<TodoItem>;
}
export const state: State = {
  todoList: []
};
