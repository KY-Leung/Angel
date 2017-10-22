import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-fa-icons';

import PatientRecords from './PatientRecords';
import MakeDonations from './MakeDonations';
import DonationsHistory from './DonationsHistory';
import ModalScreen from './ModalScreen';
import Triage from './Triage';


let blockchain = require('mastercard-blockchain');
let MasterCardAPI = blockchain.MasterCardAPI;
// comment for frontend
import {CONSUMER_KEY as consumerKey, KEYSTORE_PATH as keyStorePath} from './blockchain/Keys';
let keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
let keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key
// You only need to do initialize MasterCardAPI once
let authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
MasterCardAPI.init({
    sandbox: true,
    debug: true,
    authentication: authentication
});


// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
    return (
        <Icon name='user' allowFontScaling />
    );
}


const App = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene
                >
                    {/* Tab and it's scenes */}
                        <Scene
                            key="patientRecords"
                            component={PatientRecords}
                            title="Patient Records"
                            navigationBarStyle={styles.navBar}
                            titleStyle={styles.titleStyle}
                            initial
                        />

                    {/* Tab and it's scenes */}
                        <Scene
                            key="makeDonations"
                            component={MakeDonations}
                            title="Make Donations"
                            navigationBarStyle={styles.navBar}
                            titleStyle={styles.titleStyle}
                        />

                        <Scene
                            key="donationHistory"
                            component={DonationsHistory}
                            title="Donation History"
                            navigationBarStyle={styles.navBar}
                            headerTitleStyle={styles.titleStyle}
                        />
                        <Scene
                            key="triage"
                            component={Triage}
                            title="Triage"
                            navigationBarStyle={styles.navBar}
                            headerTitleStyle={styles.titleStyle}
                        />
                </Scene>
                <Scene
                    key="modal"
                    direction="vertical"
                    component={ModalScreen}
                    title="Modal"
                    hideNavBar
                />
            </Scene>
        </Router>
    );
}

const styles = {
    navBar: {
        backgroundColor: '#01a1d3' // changing navbar color
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    }
};

export default App;
