import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Bedtime from './Alarm/Bedtime';
import Icon from 'react-native-vector-icons/FontAwesome';

class Alarm extends Component {
  constructor() {
    super();

    this.state = { valueArray: [], disabled: false };
    this.index = 1;
  }

  addMore = () => {
    let newlyAddedValue = { index: this.index };
    this.setState(
      { disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] },
      () => {
        this.index = this.index + 1;
        this.setState({ disabled: false });
      },
    );
  };
  render() {
    let newArray = this.state.valueArray.map((item, key) => {
      return (
        <View key={key} style={styles.viewHolder}>
          <Bedtime />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scr}>
          <View style={{ flex: 1, padding: 4 }}>{newArray}</View>
        </ScrollView>

        <View style={styles.buttonDesign}>
          <Icon name="plus" onPress={this.addMore} size={50} color="#ff9800" />
        </View>
      </View>
    );
    // }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHolder: {
    backgroundColor: '#ff4081',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
  },
  buttonDesign: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scr: {
    backgroundColor: '#0D0D0D',
  },
});

export default Alarm;
