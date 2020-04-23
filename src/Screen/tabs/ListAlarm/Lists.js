import React, { Component } from 'react';
// import { Text } from 'native-base';
import index from './index';
import { View, Button } from 'react-native';

function Lists({ navigation }) {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate("index")}>
                ListAlarm
                </Button>
        </View>
    )
}

export default Lists;
