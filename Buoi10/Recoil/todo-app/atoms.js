import { atom, selector } from 'recoil';
import axios from 'axios';

const API_URL = "https://66fc94e8c3a184a84d176366.mockapi.io/api/duong/tasks";

export const tasksState = atom({
  key: 'tasksState',
  default: [],
});

export const fetchTasks = selector({
  key: 'fetchTasks',
  get: async ({ get }) => {
    try {
      const response = await axios.get(API_URL);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
});

export const updateTask = selector({
  key: 'updateTask',
  get: ({ get }) => get(tasksState),
  set: ({ get, set }, updatedTask) => {
    const tasks = get(tasksState);
    const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    set(tasksState, updatedTasks);
    axios.put(`${API_URL}/${updatedTask.id}`, updatedTask)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          console.log(response.status);
        }
      })
      .catch(error => {
        console.error("Error updating task:", error);
      });
  },
});

export const deleteTask = selector({
    key: 'deleteTask',
    get: ({ get }) => get(tasksState),
    set: ({ get, set }, taskId) => {
        const tasks = get(tasksState);
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        set(tasksState, updatedTasks);
        axios.delete(`${API_URL}/${taskId}`)
        .then(response => {
            if (response.status === 200) {
            console.log(response.status);
            }
        })
        .catch(error => {
            console.error("Error deleting task:", error);
        });
    },
})

