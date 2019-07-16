class Event{
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