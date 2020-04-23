import React, { Component } from "react";
import { } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, Content, Button, Text } from "native-base";

function UserProfile({ navigation }) {
  return (
    <Container>
      <Content style={styles.container}>
        <Button style={styles.buttonStyle} ><Text style={styles.textbutton}>Age</Text></Button>

        <Button style={styles.buttonStyle} ><Text style={styles.textbutton}>Gender</Text></Button>

        <Button style={styles.buttonStyle} ><Text style={styles.textbutton}>Weight</Text></Button>

        <Button style={styles.buttonStyle} ><Text style={styles.textbutton}>Height</Text></Button>
      </Content>
    </Container>
  );
}
// }
const styles = {
  container: {
    marginTop: 70,
    margin: 14,
    // flexDirecton: 'column'
    backgroundColor: '#000000'
  },
  buttonStyle: {
    backgroundColor: '#000000',
    textAlign: 'center',
  },
  textbutton: {
    color: '#ffa900',
    fontSize: 18,
    textAlign: 'center',
  }

};

export default UserProfile;