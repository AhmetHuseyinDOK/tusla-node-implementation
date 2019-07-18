export default class Template{
    /**
     * 
     * @param {Object} data
     * @param {Object} data.channel
     * @param {Array} data.events 
     */
    constructor({channel =null,events = []}){
        this.channel = channel;
        this.events = events;
    }
}