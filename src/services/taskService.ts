class TaskService {
  private static instance: TaskService;
  private tasks: string[] = [];
  private observer: Observer;

  private constructor() {
    this.observer = new Observer();
  }

  public static getInstance(): TaskService {
    if (!TaskService.instance) {
      TaskService.instance = new TaskService();
    }
    return TaskService.instance;
  }

  public addTask(task: string) {
    this.tasks.push(task);
    this.observer.notify(this.tasks);
  }

  public getTasks(): string[] {
    return this.tasks;
  }

  public subscribe(fn: Function) {
    this.observer.subscribe(fn);
  }

  public unsubscribe(fn: Function) {
    this.observer.unsubscribe(fn);
  }
}

export default TaskService;