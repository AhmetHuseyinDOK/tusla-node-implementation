export default class User{
    /**
     * 
     * @param {Object} data
     * @param {string} data.id
     * @param {string} data.name
     * @param {string} data.email
     * @param {string} data.phone_number
     * @param {string} data.picture 
     */
    constructor({
        id = null,
        name = null,
        email  =null,
        phone_number = null,
        picture = null
    }){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.picture = picture;
    }
}