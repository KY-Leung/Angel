import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import RectButton from './RectButton';
import SlidingUpPanel from 'rn-sliding-up-panel';




const CardViewNoButton2 = (props) => {


    return (
        <View style={{width: '100%', backgroundColor: 'white'}}>

            <View style={styles.header}>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', alignSelf:'center'}}>Vitals</Text>
            </View>
            <View style={{flexDirection: 'row', alignContent: 'center', alignSelf: 'center', justifyContent: 'space-between'}}>
            <View style={styles.sectionContainer}>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}> Blood Pressure </Text>
                    <TextInput style={{width: "90%" }}/>
                    <Text> mm/Hg </Text>
                </View>


                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}> Weight </Text>
                    <TextInput style={{width: "90%" }}/>
                    <Text> lb </Text>
                </View>

                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}> Temperature </Text>
                    <TextInput style={{width: "90%" }}/>
                    <Text> °F </Text>
                </View>

            </View>

            </View>

            <View style={styles.header}>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', alignSelf:'center'}}>Initial Presentation</Text>
            </View>
            <Text style={{padding: 16, fontSize: 14, marginBottom: -8}}>
                Acute right knee pain and tenderness around joint line- this was caused by acute renal failure</Text>

            <View style={styles.header}>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', alignSelf:'center'}}>Procedures</Text>
            </View>

            <Text style={{padding: 8, paddingLeft: 16, fontSize: 14, marginBottom: -8, }}>Vaccinations</Text>
            <Text style={{padding: 4, paddingLeft: 16, fontSize: 14, marginBottom: -8, }}>Type: Intramuscular Injection</Text>
            <Text style={{padding: 4, paddingLeft: 16, fontSize: 14, marginBottom: -8, }}>Dose Quantity: 50 /mcg</Text>
            <View style = {{width: 150, height: 50, alignSelf: 'center', marginTop: 16}}>
                <Button backgroundColor = '#01a1d3' title='Confirm' onPress={() => Actions.subsidy()}/>
            </View>



        </View>
    )


}


const styles = StyleSheet.create({

    header: {
        justifyContent: 'center',
        backgroundColor: '#fdca82',
        width: '90%',
        alignSelf: 'center',
        marginTop: 16,
        paddingTop:16,
        paddingBottom: 16,
        alignItems: 'center',
    },

    sectionContainer: {
        flexDirection: 'row',
    },

    paragraphContainer: {
        paddingTop: 8,
        marginTop: 8,
    },

    paragraph: {
        fontSize: 15,
        fontWeight: 'bold',

    }


})

export default CardViewNoButton2;