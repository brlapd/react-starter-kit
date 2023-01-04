import { useState, useReducer, useCallback, useMemo } from "react"
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";


function reducer(state, action) {
    //console.log(state, action);
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: action.value
            }
        case 'ADD_TODO':
            return {
                ...state,
                todo: '',
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.value
            }
    }
}

function UseMemoSample() {

    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        todo: '',
        search: ''
    });

    const [count, setCount] = useState(1);

    const submitHandle = useCallback(e => {
        e.preventDefault()
        //setTodos([...todos, todo]);
        //setTodo('');

        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    }, [state.todo])

    const onChange = useCallback(e => {
        //setTodo(e.target.value)
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }, [])

    const searchHandle = e => {
        dispatch({
            type: 'SET_SEARCH',
            value: e.target.value
        })
    }

    const filteredTodos = useMemo(() => {
        return state.todos.filter(todo => todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR")))
    }, [state.todos, state.search]);

    return (
        <>
            <Header />
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>
                artır
            </button>
            <hr />
            <h1>Todo App</h1>
            <input type="text" value={state.search} placeholder="Ara" onChange={searchHandle} />
            <hr />
            <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo} />
            <Todos todos={filteredTodos} />
        </>
    )
}

export default UseMemoSample