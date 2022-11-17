import React, { Component } from 'react';
import { StyleSheet, View , Text, Button} from 'react-native';

class FooterMenu extends Component {
      
    render(){
        return(
            <View style={styles.footer}>
            <Text style={styles.title}>Home</Text> 
            <Text style={styles.title}>Consultation</Text>
            <Text style={styles.title}>Resources</Text>
            <Text style={styles.title}>Activities</Text>
            <Text style={styles.title}>GMU-Services</Text>
            </View>
        )
    }
}

export default FooterMenu;

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#BAB7BE',
        height: 50,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    title:{
        alignContent: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        // borderColor: 'black',
        // borderRadius: '50%',
        // borderWidth: 1
    }
})