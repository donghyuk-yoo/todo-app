import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링해 보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);

  // 고윳값으로 사용될 id
  // ref 사용 변수 담기
  // const nextId = useRef(4);

  // 컴포넌트 최적화 테스트
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);

  // todos 배열이 바뀌었을 때만 함수 생성
  // props로 전달해야 할 함수를 만들 때는 useCallback 사용 습관화
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId,
        text: text,
        checked: false,
      };
      // 최적화전 : 새로운 상태를 이용한 업데이트
      // setTodos(todos.concat(todo));
      // todos배열이 바뀔 떄마다 함수가 새로 만들어지는 것 방지
      // 최적화 : 1. 함수형 업데이트 2. useReducer
      // 함수형 업데이트
      setTodos((todos) => todos.concat(todo));
      nextId.current = nextId.current + 1;
    },
    // 함수형 업데이트에서 useCallback 사용할 때 두 번쨰 파라미터 넣는 배열에 값 안 넣어도 됨
    // [todos],
    [],
  );

  const onRemove = useCallback((id) => {
    // 최적화 : 함수형 업데이트
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback(
    (id) =>
      // 최적화 : 함수형 업데이트
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      ),
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
