import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../Components/Header/header';
import FooterMenu from '../../Components/FooterMenu/footerMenu';
import Cards from '../../Components/HomeComponents/Card';

class HomePage extends Component {
 
    render() {
        return (
            <>
                <View>
                    <Header />
                </View>
                <ScrollView style={{marginBottom:100}}>
                    <View>
                        <Cards />
                    </View>
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <FooterMenu />
                </View>
            </>
        )
    }
}

export default HomePage;