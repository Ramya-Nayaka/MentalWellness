import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import Header from '../../Components/Header/header'
import FooterMenu from '../../Components/FooterMenu/footerMenu';
// type CardsComponentsProps = {};

const Articles = () => {
    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>Personality vs character traits</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://theartofliving.com/wp-content/uploads/2021/10/personality-traits-vs-character-traits.png',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Read More"
                        />
                    </Card>
                    
                    <Card>
                        <Card.Title>Personality vs character traits</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://theartofliving.com/wp-content/uploads/2021/10/personality-traits-vs-character-traits.png',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Read More"
                        />
                    </Card>

                    <Card>
                        <Card.Title>Personality vs character traits</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://theartofliving.com/wp-content/uploads/2021/10/personality-traits-vs-character-traits.png',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Read More"
                        />
                    </Card>

                    <Card>
                        <Card.Title>Personality vs character traits</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://theartofliving.com/wp-content/uploads/2021/10/personality-traits-vs-character-traits.png',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Read More"
                        />
                    </Card>

                    <Card>
                        <Card.Title>Personality vs character traits</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://theartofliving.com/wp-content/uploads/2021/10/personality-traits-vs-character-traits.png',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Read More"
                        />
                    </Card>


                </View>
            </ScrollView>

            <FooterMenu />
        </>
    );
};

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
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default Articles;