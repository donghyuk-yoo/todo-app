import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // react-virtualized(보이지 않는 부분은 미리 렌더링하지 않고, 그때그떄 렌더링)의
  // List컴포넌트에서 각 TodoItem을 렌더링할 떄 사용하며, 이 함수를 List컴포넌트의 props로 설정해야함
  const rowRenderer = useCallback(
    // 함수 파라미터 index, key, style값을 객체 타입으로
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    // <div className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
      // List 컴포넌트가 전달받은 props를 사용 자동으로 최적화해 준다.
    />
  );
};

// 파라미터가 { todos, onRemove, onToggle }일 때는 TodoList의 부모인 App이 리렌더링되는 유일한 이유가
// todos 배열이 업데이트될 때 뿐이므로  TodoList는 불필요한 리렌더링이 발생하지 않으나,
// 후에 추가될 App에 다른 state가 추가되어 해당 값들이 업데이트될 때는 TodoList가 불필요 리렌더링을
// 할 수 있으므로 미리 최적화해 준다.
// 리스트 관련 컴포넌트는 리스트와 아이템, 두가지를 최적화해 주어야 한다.
export default React.memo(TodoList);
