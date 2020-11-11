import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {useSelector} from "react-redux"

const GolfCard = () => {

  const golfCourses = useSelector(({golfCoursesReducer : {golfCourses}}) => golfCourses)

  return (
    <Container>
        <Header />
        <Content>
          {golfCourses[0].images.map(snapshot => {
            return (
              <Card>
            <CardItem cardBody>
              <Image source={{uri: snapshot}} style={{height: 200, width: 500}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
            )
          })}
          
        </Content>
      </Container>
    )
};

export default GolfCard;


     