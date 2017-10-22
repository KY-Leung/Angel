let protobuf = require('protobufjs');
let blockchain = require('mastercard-blockchain');
let MasterCardAPI = blockchain.MasterCardAPI;

// local hash-id transaction stores
// const patient = "9139f0eee4d0ea15ceb15be4fff89cb2ced9ccba8d6b3e7f76a79979306672bd";
// const donor = "c8d2a7f0f64b2cb0638af7d196246e6b579ae618b292b80bcda6e4390a859207";

let patient = {
    name: "jane"
};
let encounters = [{
    date: 1508673975,
    agent: "Dr. Henry Seven",
    organization: "Community Hospital",
    patient_id: "9139f0eee4d0ea15ceb15be4fff89cb2ced9ccba8d6b3e7f76a79979306672bd",
    vitals: {
        blood_pressure_sys: 126,
        blood_pressure_dia: 82,
        pulse_rate: 71,
        temperature_F: 98.6,
        weight_lbs: 63
    },
    diagnosis: {
        result: "Gout",
        presentation: "Acute right knee pain and tenderness around joint; not renal faulure."
    },
    procedures: [{
        description: "Influenza virus vaccine",
        type: "VACCINATION",
        instructions: "Intramuscular injection, dosage 50/mcg.",
        cost: 120
    }, {
        description: "Liquid Acetaminophen with Codeine",
        type: "MEDICATION",
        instructions: "Inhale 2 puffs per day",
        cost: 84
    }],
    bill_id: "9139f0eee4d0ea15ceb15be4fff89cb2ced9ccba8d6b3e7f76a79979306672bd"
}, {
    date: 1508673975,
    agent: "Dr. Jane Four",
    organization: "Community Hospital",
    patient_id: "9139f0eee4d0ea15ceb15be4fff89cb2ced9ccba8d6b3e7f76a79979306672bd",
    vitals: {
        blood_pressure_sys: 133,
        blood_pressure_dia: 90,
        pulse_rate: 65,
        temperature_F: 97.1,
        weight_lbs: 63
    },
    diagnosis: {
        result: "Flu",
        presentation: "Tenderness of throat and swelling of nose."
    },
    procedures: [{
        description: "20% paracetamol tablets",
        type: "MEDICATION",
        instructions: "no more than 4 tabs per day after food",
        cost: 26
    }],
    bill_id: "9139f0eee4d0ea15ceb15be4fff89cb2ced9ccba8d6b3e7f76a79979306672bd"
}];
let bills = [{
    id: 732810938,
    encounter_id: "e34ed56e3fad623b9378e50235b62ac55ec24dc33832fef928f75abcedc2b3d4",
    total: 213.2
}, {
    id: 732810938,
    encounter_id: "e34ed56e3fad623b9378e50235b62ac55ec24dc33832fef928f75abcedc2b3d4",
    total: 213.2
}];
let donations = [];
let fundTopups = [];

let Encounter;
let Patient;
let Bill;
let Donor;
let Donation;
let FundTopUp;

let keys = require('./Keys.js');
keys.auth();

function resetData() {
    protobuf.load("./protos/transaction_definitions.proto", function (err, root) {
        if (err)
            throw err;
        // Obtain a message type s
        Encounter = root.lookupType("TM88.Encounter");
        Patient = root.lookupType("TM88.Patient");
        Bill = root.lookupType("TM88.Bill");
        Donor = root.lookupType("TM88.Donor");
        Donation = root.lookupType("TM88.Donation");
        FundTopUp = root.lookupType("TM88.FundTopup");

        // insertRecord(Patient, {name: "Arian Silva"});
        // insertRecord(Donor, {name: "donor", country: "USA"});
        // insertRecord(Encounter, encounters[0]);
        // insertRecord(Encounter, encounters[1]);

        // viewRecord("e34ed56e3fad623b9378e50235b62ac55ec24dc33832fef928f75abcedc2b3d4", printCallbackForClass(Encounter));
    });
}

function insertRecord(type, data) {
    blockchain.TransactionEntry.create({
        "app": "TM88",
        "encoding": "base64",
        "value": type.encode(type.create(data)).finish().toString("base64")
    }, function (error, data) {
        if (error) {
            console.error("HttpStatus: " + error.getHttpStatus());
            console.error("Message: " + error.getMessage());
            console.error("ReasonCode: " + error.getReasonCode());
            console.error("Source: " + error.getSource());
            console.error(error);
        }
        else {
            console.log(data.hash);     //Output-->1e6fc898c0f0853ca504a29951665811315145415fa5bdfa90253efe1e2977b1
            console.log(data.slot);     //Output-->1503662624
            console.log(data.status);     //Output-->pending
        }
    });
}

function viewRecord(hashId, callback) {
    let requestData = {
        "hash": "1e6fc898c0f0853ca504a29951665811315145415fa5bdfa90253efe1e2977b1"
    };
    blockchain.TransactionEntry.read("", {"hash": hashId}, callback);
}

function printCallbackForClass(type) {
    return (error, data) => {
        if (error) {
            console.error("HttpStatus: " + error.getHttpStatus());
            console.error("Message: " + error.getMessage());
            console.error("ReasonCode: " + error.getReasonCode());
            console.error("Source: " + error.getSource());
            console.error(error);

        }
        else {
            var message = type.decode(new Buffer(data.value, 'hex'));
            var object = type.toObject(message, {
                longs: String,
                enums: String,
                bytes: String
            });

            console.log(data.hash);     //Output-->1e6fc898c0f0853ca504a29951665811315145415fa5bdfa90253efe1e2977b1
            console.log(data.slot);     //Output-->1503594631
            console.log(data.status);     //Output-->confirmed
            console.log(object);     //Output-->0a0f4d41393920446f63756d656e742031
        }
    }
}
resetData();