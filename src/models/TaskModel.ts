export class TaskModel {
    id: number;
    title: string;
    desc: string;
    completed: boolean;

    constructor(id: number, title: string, desc: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.completed = completed;
    }

    function updateTask() {
        
    }

}
