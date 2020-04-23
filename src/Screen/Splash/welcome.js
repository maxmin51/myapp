import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {StyleSheet} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from '../login/Login'
import AddGroup from "../../../../split/src/Components/AddGroup";

class welcome extends Component {
    render() {
        return (
            <Container>
                <Header />
            <Content>

                    <Button style={styles.b1} block
                            onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text>ورود</Text>
                    </Button>

                    <Button style={styles.b2} block>
                    <Text>عضویت</Text>
                </Button>

                </Content>
            </Container>
        );
    }
}


const RootStack = createStackNavigator(
    {
        welcome:{screen: welcome,
            navigationOptions: {
            header: null,
},},

        Login:{screen: Login},

    },
    {
        initialRouteName: 'welcome',
    }

);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
const styles=StyleSheet.create({
    b1:{

        marginTop:190,
        height:40,
        width:350,
        marginLeft:36,
        borderRadius:5

    },
    b2:{

        marginTop:10,
        height:40,
        width:350,
        marginLeft:36,
        borderRadius:5
    }

})