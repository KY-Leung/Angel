import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-fa-icons';

import PatientRecords from './PatientRecords';
import MakeDonations from './MakeDonations';
import DonationsHistory from './DonationsHistory';
import ModalScreen from './ModalScreen';
import Triage from './Triage';


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
