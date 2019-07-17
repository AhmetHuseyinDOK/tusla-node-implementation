import {Request,Template,Event} from '../index';
import {WEB_HOOK_MESSAGE_CREATED} from '../src/constants';
import { User, Message, Channel } from '../main';
import Credentials from './Credentials';

export default  class RequestManager{
    
    constructor(secretKey,uuid){
        this.credentials = new Credentials({secretKey:secretKey,UUID:uuid});
        this.channel =  new Channel({uuid:uuid});
    }

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