export class Message {
    title: string;
    message: string;
    isSent: boolean;
}

export class Messages {
    static getValidMessages(messages: Message[]): Message[] {
        return messages.filter((value) => value.message.trim().length > 0);
    }
}

Messages.getValidMessages([]);