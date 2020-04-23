import React from "react";
import { Text, View, Button } from "react-native";



export default class daily extends React.Component {
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
