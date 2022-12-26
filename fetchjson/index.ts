import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/4';

interface ToDo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(response => {
    const todo = response.data as ToDo;
    const {id, title, completed } = todo;
    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    ID: ${id},
    Title: ${title},
    Finished: ${completed}
`);
}