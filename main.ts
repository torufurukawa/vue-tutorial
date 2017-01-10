import * as Vue from "vue";

interface ITask {
  body: string;
  done: boolean;
}

class TodoApp extends Vue {
  tasks: ITask[];
  newTaskBody = '';

  addNew(): void {
    var task = this.newTaskBody && this.newTaskBody.trim();
    if (!task) {
      return;
    }
    this.tasks.push({body: task, done: false});
    this.newTaskBody = '';
  }

  deleteTask(delIndex: number): void {
    this.tasks.splice(delIndex, 1);
  }

  deleteDone() : void {
    var oldTasks = this.tasks;
    this.tasks = [];
    oldTasks.forEach(task => {
      if (!task.done) this.tasks.push(task);
    })
  }

  getDoneCount(): number {
    var count = 0;
    this.tasks.forEach(task => {
      count += task.done ? 1: 0;
    });
    return count;
  }


};

export var todoApp = new TodoApp({
      el: '#todoapp',
      data: {
        tasks: [],
        newTaskBody: ''
      },
      computed: {
        getDoneCount: this.getDoneCount
      },
      created: () => {
        this.tasks = [
          { body: 'do this 1', done: false },
          { body: 'do this 2', done: false },
          { body: 'do this 3', done: false },
          { body: 'do this 4', done: false }
        ],
        this.newTaskBody = '';
      },
      methods: {
        addNew: this.addNew,
        deleteTask: this.deleteTask,
        deleteDone: this.deleteDone
      }
    });
