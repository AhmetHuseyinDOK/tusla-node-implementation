export default  class Event{
    /**
     * 
     * @param {Object} data 
     * @param {string} data.hook 
     * @param {Object} data.user
     * @param {Array} data.messages
     * 
     */
    constructor({
        hook = null,
        user = null,
        messages = []
    }){
        this.hook = hook;
        this.user = user;
        this.messages = messages;
    }
}