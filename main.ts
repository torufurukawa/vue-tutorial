import * as Vue from "vue";

interface ITask {
  body: string;
  done: boolean;
}

class TodoApp extends Vue {
};

export var todoApp = new TodoApp({
  el: '#todoapp',
  data: {
    tasks: ITask[]
  }
});
