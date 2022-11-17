import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';

class Login extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://cdn.givhero.com/assets/images/insights-the-benefits-of-prioritizing-mental-wellness-in-the-workplace.jpg',
                            }} />
                    </View>
                </ScrollView>

                <View style={{ margin: 10 }}>
                    <Text>Username:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                    />
                </View>

                <Button style={styles.button}>Login</Button>
                
                <View style={{ marginTop: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Text> powered by </Text>
                    <Image
                        style={styles.imageGMU}
                        source={{
                            uri: 'https://images.squarespace-cdn.com/content/v1/623126b50d2dfb281caaafd3/7933697b-688b-447b-aec1-d7e63b87bed2/George-Mason-University-logo.jpg',
                        }} />
                </View>

            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: "100%",
        height: 350,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    input: {
        borderColor: "black",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    button: {
        width: 60
    },
    imageGMU: {
        height: '40%',
        width: '40%',
        display: 'flex',
        justifyContent: 'center'
    }
});