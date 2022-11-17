import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import Header from '../../Components/Header/header'
import FooterMenu from '../../Components/FooterMenu/footerMenu';
// type CardsComponentsProps = {};

const Activities = () => {
    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>Meditate</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://us.123rf.com/450wm/djvstock/djvstock2203/djvstock220300843/183515509-silhouette-buddha-statue.jpg?ver=6',
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
                            title="Start Now"
                        />
                    </Card>
                    
                    <Card>
                        <Card.Title>Fitness</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://classroomclipart.com/images/gallery/Clipart/Sports/Physical_Fitness_Clipart/boy-performs-push-up-exercise-clipart-6224.jpg',
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
                            title="Start Now"
                        />
                    </Card>

                    <Card>
                        <Card.Title>Events near you</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://i.kym-cdn.com/photos/images/newsfeed/001/248/113/525.jpg',
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
                            title="Explore"
                        />
                    </Card>

                    <Card>
                        <Card.Title>Workshops</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://lvccld.bibliocommons.com/events/uploads/images/full/689dc4a7836ca820423acf39f78d5919/MentalHealthFall22_Biblio760x397copy.jpg',
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
                            title="Explore"
                        />
                    </Card>

                    <Card>
                        <Card.Title>Group Activities</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMhIqy9luCnEw0PXDunotyZBnQ1mly_vnvg&usqp=CAU',
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
                            title="Explore"
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

export default Activities;