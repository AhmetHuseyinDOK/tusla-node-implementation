class Message{
    constructor({
        id = null,
        type = null,
        content = null,
        timestamp = null,
        url = null
    }){
        this.id = id;
        this.type = type;
        this.content = content;
        this.timestamp = timestamp;
        this.url = url;
    }
}