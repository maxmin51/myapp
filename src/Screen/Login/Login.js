import React, {Component} from 'react';
import {View, Text, Image, Alert, ScrollView} from 'react-native';
import {Button, Item, Input} from 'native-base';
import styles from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  myValidate = () => {
    const {username, password} = this.state;
    if (username == '' && password == '') {
      Alert.alert('please fill the username and password');
    } else if (username == 'ebi' && password == 'rs') {
      Alert.alert('succes');
    } else if (username == 'ebi' && password == '') {
      Alert.alert('password emty');
    } else if (username == '' && password == 'rs') {
      Alert.alert('username empty');
    } else {
      Alert.alert('data not found');
    }
  };

  render() {
    return (
      <ScrollView style={{height: 667, backgroundColor: '#192879'}}>
        <View style={styles.mainbody}>
          <View style={{marginBottom: 16}}>
            <Text style={styles.labeluser}>Username</Text>
            <Item regular style={styles.inputuser}>
              <Input
                onChangeText={username => this.setState({username})}
                autoCapitalize="none"
                style={{color: '#8392E0'}}
              />
            </Item>
          </View>

          <View style={{marginBottom: 16}}>
            <Text style={styles.labeluser}>password</Text>
            <Item regular style={styles.inputuser}>
              <Input
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
                autoCapitalize="none"
                style={{color: '#8392E0'}}
              />
            </Item>
          </View>

          <Button
            //onPress={() => this.props.navigation.navigate('Home')}

            onPress={this.myValidate}
            style={styles.btnsignin}
            block>
            <Text style={styles.labelbtn}>sign in</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}
