import produce from "immer"

// Action Creator
export const addTask = (newTask) => {
    return {
        type: 'todo/addTask',
        payload: newTask
    }
}

export const removeTask = (task) => {
    return {
        type: 'todo/removeTask',
        payload: task
    }
}

const initialValue = {
    taskList: []
}

export const todoReducer = produce((draft, action) => {
    switch (action.type) {
        case 'todo/addTask': {
            draft.taskList.push(action.payload);
            break;
        }
        case 'todo/removeTask': {
            const newTaskList = draft.taskList.filter(element => element.id !== action.payload);
            draft.taskList = newTaskList
            break;
        }
        default: {
            return initialValue;
        }
    }
})

// Selector function

export const selectTaskList = (state) => state.todo.taskList;