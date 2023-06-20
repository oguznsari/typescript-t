function messagePrint(target) {
    Object.defineProperty(
        target.prototype,
        'server',
        { value: () => 'Node server is running.' }
    )
}


// messagePrint function will be available inside Message class || decoration
@messagePrint
export default class Message {
    name;
    constructor(name) {
        this.name = name;
    }
}