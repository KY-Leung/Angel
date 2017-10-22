import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-fa-icons';

import PatientRecords from './PatientRecords';
import MakeDonations from './Triage';
import DonationsHistory from './DonationsHistory';
import ModalScreen from './ModalScreen';

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
                    key="tabbar"
                    tabs={true}
                    tabBarPosition="bottom"
                    tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key="records" title="Records" icon={TabIcon}>
                        <Scene
                            key="patientRecords"
                            component={PatientRecords}
                            title="Patient Records"
                            navigationBarStyle={styles.navBar}
                            titleStyle={styles.titleStyle}
                            initial
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="donations" title="Donations" icon={TabIcon}>
                        <Scene
                            key="makeDonations"
                            component={MakeDonations}
                            title="Make Donations"
                            navigationBarStyle={styles.navBar}
                            titleStyle={styles.titleStyle}
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="history" title="History" icon={TabIcon}>
                        <Scene
                            key="donationHistory"
                            component={DonationsHistory}
                            title="Donation History"
                            navigationBarStyle={styles.navBar}
                            headerTitleStyle={styles.titleStyle}
                        />
                    </Scene>
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
