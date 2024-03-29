export default class Message{
    /**
     * 
     * @param {Object} data
     * @param {string} data.id 
     * @param {string} data.type 
     * @param {string} data.content
     * @param {Object} date.timestamp
     */
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

    /**
     * 
     * @param {Object} data 
     * @param {string} data.id
     * @param {string} data.content
     */
    static textMessage({id=null,content=null}){
        return new Message({
            id:id,
            content:content,
            type:"text",
            timestamp: new Date()
        });
    }
    
}