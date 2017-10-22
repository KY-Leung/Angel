import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button } from 'react-native-elements';
import RectButton from './RectButton';
import SlidingUpPanel from 'rn-sliding-up-panel';

const CardViewForDetails = (props) => {
    return (
        <View>
            <Card title="Regular Health Screening (Nov. 12, 2017)" containerStyle={styles.containerStyle} featuredTitleStyle={{color: '#8f8f8f'}}>
                <View style={{paddingTop: 8}}>
                    <Text style={styles.title}>Vitals</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <View style={{paddingTop: 8}}>
                            <Text>Blood Pressure</Text>
                            <Text style={styles.subTitle}>126/80 mm/Hg</Text>
                        </View>
                        <View style={{paddingTop: 8}}>
                            <Text>Temperature Pressure</Text>
                            <Text style={styles.subTitle}>98.6 F</Text>
                        </View>
                        <View style={{paddingTop: 8}}>
                            <Text>Weight</Text>
                            <Text style={styles.subTitle}>63 lb</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingTop: 24}}>
                    <Text style={styles.title}>Diagnosis</Text>
                    <View style={styles.padding}>
                        <Text style={styles.thirdTitle}>Initial Presentation</Text>
                        <Text>Patient present with flu-like symptoms. Recent asthma attack dated on Nov.12, 2017.</Text>
                    </View>
                    <View style={styles.padding}>
                        <Text style={styles.thirdTitle}>Procedure and Medications</Text>
                        <Text>Immunization. Influenza virus vaccine. IM</Text>
                        <Text>Immunization. Tetanus and diphtheria toxoids, IM</Text>
                    </View>
                    <View style={styles.padding}>
                        <Text style={styles.thirdTitle}>Medication: Acetaminophen with codiene</Text>
                        <Text>Medication: Indomethacin</Text>
                    </View>
                </View>
            </Card>
            <Card title="Regular Health Screening (Jan. 21, 2017)" containerStyle={styles.containerStyle} featuredTitleStyle={{color: '#8f8f8f'}}>
                <View style={{paddingTop: 8}}>
                    <Text style={styles.title}>Vitals</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <View style={{paddingTop: 8}}>
                            <Text>Blood Pressure</Text>
                            <Text style={styles.subTitle}>110/60 mm/Hg</Text>
                        </View>
                        <View style={{paddingTop: 8}}>
                            <Text>Temperature Pressure</Text>
                            <Text style={styles.subTitle}>70.6 F</Text>
                        </View>
                        <View style={{paddingTop: 8}}>
                            <Text>Weight</Text>
                            <Text style={styles.subTitle}>61 lb</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingTop: 24}}>
                    <Text style={styles.title}>Diagnosis</Text>
                    <View style={styles.padding}>
                        <Text style={styles.thirdTitle}>Initial Presentation</Text>
                        <Text>Patient present with flu-like symptoms. Recent asthma attack dated on Nov.12, 2017.</Text>
                    </View>
                    <View style={styles.padding}>
                        <Text style={styles.thirdTitle}>Procedure and Medications</Text>
                        <Text>Immunization. Influenza virus vaccine. IM</Text>
                        <Text>Immunization. Tetanus and diphtheria toxoids, IM</Text>
                    </View>
                    <View style={styles.padding}>
                        <Text style={styles.thirdTitle}>Medication: Acetaminophen with codiene</Text>
                        <Text>Medication: Indomethacin</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        alignContent: 'flex-start',
        width: '95%'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 25,
        fontWeight: '500',
        color: 'green',
    },
    padding: {
        paddingTop: 8
    },
    thirdTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default CardViewForDetails;
