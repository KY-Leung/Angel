/**
 *
 * Script-Name: example_get_status
 */
let blockchain = require('mastercard-blockchain');
let MasterCardAPI = blockchain.MasterCardAPI;

// uncomment for frontend
// import {CONSUMER_KEY as consumerKey, KEYSTORE_PATH as keyStorePath, APP_ID as appId} from "./Keys"

// comment for frontend
let keys = require('./Keys.js');
keys.auth();
/**
 *
 * Script-Name: example_get_app
 */

let readApp = () => {
    var requestData = {};
    blockchain.App.read(keys.appId, requestData
        , function (error, data) {
            if (error) {
                console.error("HttpStatus: " + error.getHttpStatus());
                console.error("Message: " + error.getMessage());
                console.error("ReasonCode: " + error.getReasonCode());
                console.error("Source: " + error.getSource());
                console.error(error);

            }
            else {
                console.log(data.definition.encoding);     //Output-->base64
                console.log(data.definition.format);     //Output-->proto3
                console.log(new Buffer(data.definition.messages, data.definition.encoding).toString());
                console.log(data.id);     //Output-->MA99
            }
        });
};

let updateApp = () => {
    var requestData = {
        "id": keys.appId,
        "name": keys.appId,
        "description": "",
        "version": 0,
        "definition": {
            "format": "proto3",
            "encoding": "base64",
            "messages": "Ly8gU2ltcGxlIG5vdGFyeSBhcHBsaWNhdGlvbg0KDQpzeW50YXggPSAicHJvdG8zIjsNCg0KcGFja2FnZSBFMTAyOw0KDQptZXNzYWdlIE1lc3NhZ2Ugew0KCWJ5dGVzIGFydGlmYWN0UmVmZXJlbmNlID0gMTsNCn0\u003d"
        }
    };
    blockchain.App.update(requestData
        , function (error, data) {
            if (error) {
                console.error("HttpStatus: "+error.getHttpStatus());
                console.error("Message: "+error.getMessage());
                console.error("ReasonCode: "+error.getReasonCode());
                console.error("Source: "+error.getSource());
                console.error(error);

            }
            else {
            }
        });
};
