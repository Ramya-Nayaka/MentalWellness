import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                {/* <Text>logo</Text> */}
                <Image style={{height:40, width: 70, borderRadius: 50, borderWidth:10}} source={{uri:"https://thumbs.dreamstime.com/z/mental-health-care-logo-vector-design-head-leaf-hand-template-icon-medical-teraphy-psychotherapy-sign-symbol-167310943.jpg"}}/>
                <Text style={styles.title}>Mental Wellness</Text>
                <Image style={{height:39, width: 70}} source={{uri:"https://previews.123rf.com/images/iconscart/iconscart1803/iconscart180300085/102081534-online-user-profile-icon.jpg"}}/>
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#C2AAE3',
        height: 60,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center'
    },
    title:{
        alignContent: 'center',
        fontSize: 20,
    }
})