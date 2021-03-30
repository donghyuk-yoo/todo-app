import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref 사용 변수 담기
  const nextId = useRef(4);

  // todos 배열이 바뀌었을 때만 함수 생성
  // props로 전달해야 할 함수를 만들 때는 useCallback 사용 습관화
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId,
        text: text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current = nextId.current + 1;
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
