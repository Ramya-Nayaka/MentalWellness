import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
import Header from '../../Components/Header/header';
import FooterMenu from '../../Components/FooterMenu/footerMenu';
class SelfAssessment extends Component {
    render() {
        return (
            <>
                <Header />
                <ScrollView>
                <View style={{ margin: 10 }}>
                    <Text>What is your name?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>What is your age?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>Do you know what is mental health?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                {/* <View style={{ margin: 10 }}>
                    <Text>Do you think mental wellness is really important</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View> */}

                <View style={{ margin: 10 }}>
                    <Text>Have you ever come across a situation where you wanted to seek or learn about what mental wellness is?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>Do you know there is medical help to help you deal with your mental wellness</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

              

                {/* <View style={{ margin: 10 }}>
                    <Text>Do you think it is important to know about your mental wellness timely?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>Do you think using an application for mental wellness will be helpful?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View> */}

                <View style={{ margin: 10 }}>
                    <Text>Do you often feel difficult to convey what you are going through to your closed ones?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>Do you feel overwhelmed for every single episode in your life?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text>Do you loose control over your emotions?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>
                
                <View style={{ margin: 10 }}>
                    <Text>Do you feel you are lonely most of the time?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <View style={{ margin: 10 }}>
                    <Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your answer"
                    />
                </View>

                <Button style={styles.button}>Self Assess</Button>

                <View style={{ marginTop: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Text> powered by </Text>
                    <Image
                        style={styles.imageGMU}
                        source={{
                            uri: 'https://images.squarespace-cdn.com/content/v1/623126b50d2dfb281caaafd3/7933697b-688b-447b-aec1-d7e63b87bed2/George-Mason-University-logo.jpg',
                        }} />
                </View>
                </ScrollView>
                <FooterMenu />
            </>
        )
    }
}

export default SelfAssessment;

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