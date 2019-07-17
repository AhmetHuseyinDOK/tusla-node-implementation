export default class Message{

    constructor({
        id=null,
        type=null,
        content=null,
        timestamp=null
    }){
        this.id = id;
        this.type = type;
        this.content= content;
        this.timestamp = timestamp;
    }

    static textMessage({id=null,content=null}){
        return new Message({
            id:id,
            content:content,
            type:"text",
            timestamp: new Date()
        });
    }
    
}