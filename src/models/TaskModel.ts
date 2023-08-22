export class TaskModel {
    id: string;
    title: string;
    desc: string;
    completed: boolean;

    constructor(id: string, title: string, desc: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.completed = completed;
    }

    updateTask(title: string = this.title, desc: string = this.desc) {
        this.title = title;
        this.desc = desc;
    }

    complete() {
        this.completed = true;
    }

}
