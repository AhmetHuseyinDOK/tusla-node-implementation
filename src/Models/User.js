export default class User{
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