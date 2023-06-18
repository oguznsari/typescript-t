export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    priviewMessage(): string {
        return this.message.slice(0, 10).concat('...')
    }
}

const message = new Message("Hello", "World");

message.priviewMessage();