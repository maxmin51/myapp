import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import index from './ListAlarm/index';
import { Container, Content, Fab, Text, Icon, View, Button } from 'native-base';
// import { Icon } from 'react-native-vector-icons/Icon';

function About({ navigation }) {
    return (
        <Container>
            <View style={{ flex: 1 ,backgroundColor:'#000'}}>
                <Fab
                    onPress={() => navigation.navigate('Alarm')}
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight">
                    <Icon name="add" />
                </Fab>
            </View>

        </Container >
    );
}


const styles = StyleSheet.create({
    
})
export default About;


