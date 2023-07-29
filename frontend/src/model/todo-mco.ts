import { webGet } from "src/webc";


export interface Todo {
    id: number;
    title: string;
    status: 'Open' | 'Close';
}

export type TodoPatch = Partial<Omit<Todo, 'id'>>;

class TodoMco {

    async list(): Promise<Todo[]> {
        const data = await webGet("todos");
        return data as Todo[];
    }
}

export const todoMco = new TodoMco();