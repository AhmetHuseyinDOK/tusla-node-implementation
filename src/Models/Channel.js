export default class Channel{
    /**
     * 
     * @param {Object} data
     * @param {string} data.uuid uuid of channel 
     */
    constructor({uuid = null}){
        this.uuid = uuid;
    }
}