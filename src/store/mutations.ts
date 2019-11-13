import { MutationTree } from "vuex";
import { TodoItem, State } from "./state";

export const mutations: MutationTree<State> = {
  //创建todo
  createTodoItem(state: State, todoItem: TodoItem) {
    state.todoList.push(todoItem);
  }
};
