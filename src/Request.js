import {HmacSHA256} from 'crypto-js';
import crypto from 'crypto';
import axios from 'axios';
import {WEB_HOOK_URL}  from "./constants";
export default class Request{
        /**
         * Assigns credentials to request on creating 
         * @param {Credentials} credentials A Credentials Object
         *  
         */
        constructor(credentials){
            this.credentials = credentials;            
            this.template = null;
        }

        /**
         * 
         * Gets the authentication key for header X-Connexease-Webhook-Sign
         * 
         */
        get webhookSignHeader(){
            var key = Buffer.from(this.credentials.secretKey, 'utf8');
            return  crypto.createHmac('sha256', key).update(this.credentials.UUID,'utf8').digest('base64');
        }

        /**
         * 
         * assigns the template if provided
         * @param {Template} template 
         * 
         */
        async send(template=this.template){
            return await axios.post(WEB_HOOK_URL,template,{
                headers: {'X-Connexease-Webhook-Sign':this.webhookSignHeader}
            });
        }


}