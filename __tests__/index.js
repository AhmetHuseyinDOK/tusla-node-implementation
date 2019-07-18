import {Credentials,Request,Template,Channel,Event,RequestManager} from '../index';
import {uuid,secretKey} from '../constants';
import {WEB_HOOK_MESSAGE_CREATED} from '../src/constants';
import { User, Message } from '../main';


test('message create request with plain json', async () =>{
    var template = 
    {
        "channel": {
            "uuid": uuid
            },
        "events": [
            {
                "hook": "message.create",
                "user": {
                    "id": "user-unique-id",
                    "name": "IT TEST",
                    "email": "it@test.com",
                    "phone_number": "+905000000000",
                    "picture": "https://loremflickr.com/320/240"
                },
                "messages": [
                    {
                        "id": "message-unique-id",
                        "type": "text",
                        "content": "IT TEST",
                        "timestamp": "2018-05-23 08:14:55.300273+00:00"
                    },
                    {
                        "id": "message-unique-id2",
                        "type": "image",
                        "content": "Lorem ipsum dolor site amet...",
                        "timestamp": "2018-05-23 08:14:55.300273+00:00",
                        "url": "https://loremflickr.com/320/240"
                    }
                ]
            }
        ]
    };

    var credentials =  new Credentials({secretKey:secretKey,UUID:uuid});
    var request =  new Request(credentials);
    var response =  await request.send(template);
    expect(response.status).toBe(200);
});

test('message create request with template class',async () =>{
    let credentials =  new Credentials({secretKey:secretKey,UUID:uuid});
    let channel =  new Channel({uuid:uuid});
    let messages = [Message.textMessage({content:"IT TEST"})];
    let user = new User({name:"IT TEST NAME",phone_number:"5577745766",email:"it@test.com"});
    let events = [new Event({hook:WEB_HOOK_MESSAGE_CREATED,user:user,messages:messages})];
    let template =  new Template({channel:channel,events:events});
    let request = new Request(credentials);
    console.log(template);
    let res =  await request.send(template);
    expect(res.status).toBe(200);
});

test('text message create request with RequestManager',async () => {
    
    let manager =  await new RequestManager(secretKey,uuid);
    let request =  manager.createTextMessageRequest({
        User:{
            name:"IT TEST",
            email:"it@test.com",
            content:"IT TEST"
        },
        Message:{
            content:"IT TEST"
        }
    });

    let response  = await request.send();
    expect(response.status).toBe(200);
});