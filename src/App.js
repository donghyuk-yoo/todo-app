import React, { useReducer, useCallback, useRef, useState } from 'react';
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

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
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
  // 함수형 업데이트
  // const [todos, setTodos] = useState(createBulkTodos);
  // useReducer형 업데이트
  // 원래 두 번째 파라미터가 초기상태 이지만, 이런식으로 두 번쨰 undefined,
  // 세 번쨰에 초기상태 만들어주는 함수 넣을시, 컴포넌트가 맨 처음 렌더링될 때만 함수가 호출 된다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

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
      // 1. 함수형 업데이트
      // setTodos((todos) => todos.concat(todo));
      // 2. useReducer형 업데이트
      dispatch({ type: 'INSERT', todo: todo });
      nextId.current = nextId.current + 1;
    },
    // 함수형 업데이트에서 useCallback 사용할 때 두 번쨰 파라미터 넣는 배열에 값 안 넣어도 됨
    // [todos],
    [],
  );

  const onRemove = useCallback((id) => {
    // 최적화 : 함수형 업데이트
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    // useReducer 형 업데이트
    dispatch({ type: 'REMOVE', id: id });
  }, []);

  const onToggle = useCallback((id) => {
    // 최적화 : 함수형 업데이트
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    // useReducer 형 업데이트
    dispatch({ type: 'TOGGLE', id: id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
