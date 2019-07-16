import {HmacSHA256} from 'crypto-js';
import axios from 'axios';
import {WEB_HOOK_URL}  from "./constants";
class Request{
        
        constructor(credentials){
            this.credentials = credentials;            
        }

        get webhookSignHeader(){
            return HmacSHA256(this.credentials.secretKey,this.credentials.UUID);
        }

        async send(template){
            return await axios.post(WEB_HOOK_URL,template,{
                headers: {'X-Connexease-Webhook-Sign':this.webhookSignHeader}
            });
        }

}