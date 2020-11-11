import React, { useState, FunctionComponent } from 'react';
import {useSelector} from "react-redux"
import { Container, Header, Content, Button, Text } from 'native-base';
import { NativeRouter, Route, Link } from "react-router-native";
import { useHistory } from "react-router-dom";

//import { useDispatch } from 'react-redux'
import GolfCard from "./GolfCard"

const GolfCoursesList : FunctionComponent = () => {
  let history = useHistory();

  const golfCourses = useSelector(({golfCoursesReducer : {golfCourses}}) => golfCourses)
  const [loading, setLoading] = useState(false)


  return (
    <Container>
    <Header />
    <Content>
      {golfCourses.map(course => {
        return(

                    <Button primary onPress={() => history.push("/course-name")}><Text>{course.name}</Text></Button>

  

        ) 
      })}
    </Content>
  </Container>
  
    // loading ? <Text>Loading...</Text> : <GolfCard golfCourses={golfCourses} />
  );
};

export default GolfCoursesList;

/*
const dispatch = useDispatch()

<button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>

*/