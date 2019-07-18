import {Request,Template,Event} from '../main';
import {WEB_HOOK_MESSAGE_CREATED} from '../src/constants';
import { User, Message, Channel } from '../main';
import Credentials from './Credentials';

export default  class RequestManager{
    
    /**
     * 
     * @param {string} secretKey 
     * @param {string} uuid 
     */
    constructor(secretKey,uuid){
        this.credentials = new Credentials({secretKey:secretKey,UUID:uuid});
        this.channel =  new Channel({uuid:uuid});
    }

    /**
     * 
     * creates a request a create a new message to TuslaAPI
     * @param {Object} Data Data of the request
     * @param {Object} Data.User User Info
     * @param {string} Data.User.userId id of the user
     * @param {string} Data.User.name name of the user
     * @param {string} Data.User.email email of the user
     * @param {string} Data.User.phone_number phone number of the user
     * @param {string} Data.User.picture picture of the user
     * @param {Object} Data.Message Message Info
     * @param {string} Data.Message.messageId id of the user
     * @param {string} Data.Message.content content of the user
     * @returns {Object} request
     *   
     */
    createTextMessageRequest({
        User:{
            userId=null,
            name=null,
            email=null,
            phone_number = null,
            picture = null
        },
        Message:{
            messageId=null,
            content=null
        }
    }){
        let request =  new Request(this.credentials);
        let events = [
            new Event({
                hook:WEB_HOOK_MESSAGE_CREATED,
                user:new User({id:userId,name:name,email:email,phone_number:phone_number,picture:picture}),
                messages:[Message.textMessage({id:messageId,content:content})]
            })
        ]

        let template =  new Template({channel:this.channel,events:events});
        request.template = template;
        return request;

    }

}