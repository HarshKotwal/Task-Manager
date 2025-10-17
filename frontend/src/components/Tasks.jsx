export function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map(function (task) {
        return (
          <div>
            <h1>{task.title}</h1>
            <h1>{task.description}</h1>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
