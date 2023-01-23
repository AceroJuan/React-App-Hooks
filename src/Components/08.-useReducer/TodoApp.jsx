import { useTodos } from '../../Hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodos()
  
  return (
    <>
      <h1>TodoApp: {todosCount}, pendientes: {pendingTodosCount} </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos}
          onDeleteTodo={ handleDeleteTodo }
          onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
