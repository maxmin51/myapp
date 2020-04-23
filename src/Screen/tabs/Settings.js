import React, { Component } from 'react';
import { Container, Button, Content, Text } from 'native-base';
import { StyleSheet } from 'react-native';

// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
  {
    title: 'User Profile',
    icon: 'av-timer',
    page:'UserProfile',
  },
  {
    title: 'Login/Sign Up',
    icon: 'flight-takeoff'
  },
  {
    title: 'Settings',
    icon: 'flight-takeoff'
  },
  {
    title: 'Notification',
    icon: 'flight-takeoff'
  },
  {
    title: 'Share SleepinG',
    icon: 'flight-takeoff',
  },
  {
    title: 'About',
    icon: 'flight-takeoff',
    page:'About'
  },


]
function Settings({ navigation }) {
  return (

    <View>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
            bottomDivider
            chevron
            onPress={() => navigation.navigate(item.page)}

          />
        ))
      }
    </View>
  )
}
// function Settings({ navigation }) {
//   return (
//     <Container>
//       <Content style={styles.container}>
//         
//        

//         <Button style={styles.buttonStyle}><Text style={styles.textbutton}>Settings</Text></Button>

//         <Button style={styles.buttonStyle} ><Text style={styles.textbutton}>Notification</Text></Button>

//         <Button style={styles.buttonStyle} >
//           <Text style={styles.textbutton}>Share SleepinG</Text>
//         </Button>

//         <Button
//           style={styles.buttonStyle}
//           onPress={() => navigation.navigate('About')}
//         ><Text style={styles.textbutton}>About</Text></Button>
//       </Content>
//     </Container>
//   );
// }
// // }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 70,
//     margin: 14,
//     // flexDirecton: 'column'
//     backgroundColor: '#000000'
//   },
//   buttonStyle: {
//     // fontStyle:'ffa900',
//     backgroundColor: '#000000',
//   },
//   textbutton: {
//     color: '#ffa900',
//     fontSize: 18,
//     textAlign: 'center',
//   }
// });

export default Settings;
