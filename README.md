# Tusla Customer Service

Send a text message using RequestManager

```
    var uuid = "your-uuid-asda-aczx"
    var secretKey = "your-app-secret-key"
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

```

Send a message with Template Class

```
    var uuid = "your-uuid-asda-aczx"
    var secretKey = "your-app-secret-key"
    let credentials =  new Credentials({secretKey:secretKey,UUID:uuid});
    let channel =  new Channel({uuid:uuid});
    let messages = [Message.textMessage({content:"IT TEST"})];
    let user = new User({name:"IT TEST NAME",phone_number:"5577745766",email:"it@test.com"});
    let events = [new Event({hook:WEB_HOOK_MESSAGE_CREATED,user:user,messages:messages})];
    let template =  new Template({channel:channel,events:events});
    let request = new Request(credentials);
    let res =  await request.send(template);

```

Send a message using json data

```
var uuid = "your-uuid-asda-aczx"
var secretKey = "your-app-secret-key"
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
```
