export class Task {
    title: string;
    desc: string;
    completed: boolean;

    constructor(title: string, desc: string, completed: boolean) {
        this.title = title;
        this.desc = desc;
        this.completed = completed;
    }
}