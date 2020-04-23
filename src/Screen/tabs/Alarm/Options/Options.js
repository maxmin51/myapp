import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class Options extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0D0D0D"
        }}
      >
        <Button title="home" />
      </View>
    );
  }
}
export default Options;
