const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const taskService = TaskService.getInstance();

  useEffect(() => {
    const updateTasks = () => setTasks(taskService.getTasks());
    taskService.subscribe(updateTasks);
    return () => {
      taskService.unsubscribe(updateTasks);
    };
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;