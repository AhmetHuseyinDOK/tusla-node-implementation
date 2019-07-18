export default class Credentials{
    /**
     * 
     * @param {string} secretKey Secret key provided by Tusla
     * @param {string} UUID UUID provided by Tusla  
     */
    constructor({
        secretKey = null,
        UUID = null
    }){
        this.secretKey = secretKey;
        this.UUID =UUID;
    }
}