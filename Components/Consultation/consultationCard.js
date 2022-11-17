import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import Header from '../Header/header';
import FooterMenu from '../FooterMenu/footerMenu';
// type CardsComponentsProps = {};

const ConsultationCard = () => {
    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>Doctor 1</Card.Title>
                        <Card.Divider />
                        <View>
                            <Image
                                // style={styles.image}
                                source={{
                                    uri: 'https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg',
                                }} />
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Chat Now"
                            />
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Call Now"
                            />
                        </View>
                    </Card>

                    <Card>
                        <Card.Title>Doctor 2</Card.Title>
                        <Card.Divider />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                // style={styles.image}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/6620/6620101.png',
                                }} />

                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Chat Now"
                            />
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Call Now"
                            />
                        </View>
                    </Card>

                    <Card>
                        <Card.Title>Doctor 3</Card.Title>
                        <Card.Divider />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                // style={styles.image}
                                source={{
                                    uri: 'https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg',
                                }} />

                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Chat Now"
                            />
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Call Now"
                            />
                        </View>
                    </Card>

                    <Card>
                        <Card.Title>Doctor 4</Card.Title>
                        <Card.Divider />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                // style={styles.image}
                                source={{
                                    uri: 'https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg',
                                }} />

                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Chat Now"
                            />
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Call Now"
                            />
                        </View>
                    </Card>

                    <Card>
                        <Card.Title>Doctor 5</Card.Title>
                        <Card.Divider />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                // style={styles.image}
                                source={{
                                    uri: 'https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg',
                                }} />

                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Chat Now"
                            />
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Call Now"
                            />
                        </View>
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

export default ConsultationCard;