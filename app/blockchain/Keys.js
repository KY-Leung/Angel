let blockchain = require('mastercard-blockchain');
let MasterCardAPI = blockchain.MasterCardAPI;

const CONSUMER_KEY = "Dx3mD8xYHP1O4hUK9IQioEKOwoNq7PCBzlXMT_xG346c41bb!52e72628508a4b69ab33701a2c0bca7d0000000000000000";
const KEYSTORE_PATH = "../../Angel-1508636701-sandbox.p12";
const APP_ID = "TM88";
let AUTHENTICATE = () => {
    let authentication = new MasterCardAPI.OAuth(CONSUMER_KEY, KEYSTORE_PATH, "keyalias", "keystorepassword");
    MasterCardAPI.init({
        sandbox: true,
        debug: true,
        authentication: authentication
    });
};

// export {CONSUMER_KEY, KEYSTORE_PATH, AUTHENTICATE, APP_ID};

module.exports = {
    consumerKey: CONSUMER_KEY,
    keystorePath: KEYSTORE_PATH,
    auth: AUTHENTICATE,
    appId: APP_ID
};