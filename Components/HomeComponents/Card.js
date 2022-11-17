import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const users = [
{
  name: 'brynn',
  avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
},
{
  name: 'thot leader',
  avatar:
    'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
},
{
  name: 'jsa',
  avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
},
{
  name: 'talhaconcepts',
  avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
},
{
  name: 'andy vitale',
  avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
},
{
  name: 'katy friedson',
  avatar:
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
},
];

// type CardsComponentsProps = {};

const Cards  = () => {
return (
  <>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Article of the Day</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://pillarsofwellness.ca/wp-content/uploads/2021/03/mental-health-960x675.jpg',
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
          <Card.Title>Self Assessment</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://scribblepgce.files.wordpress.com/2015/11/assessment2.jpg?w=676',
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
            title="Take test now"
          />
        </Card>
        <Card>
          <Card.Title>Ask an Expert</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://static.wixstatic.com/media/c1bbcf_87b04f88f721477bb346c39fe97b9e1e~mv2.png/v1/fit/w_1000%2Ch_740%2Cal_c/file.png',
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
            title="Book Now"
          />
        </Card>
      </View>
    </ScrollView>
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

export default Cards;