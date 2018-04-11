import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback
} from "react-native";
import { Actions } from 'react-native-router-flux';
import { CardSection } from "./common";

class ListItem extends Component {
    onRowPress(){
        Actions.shopEdit({ shop: this.props.shop })  //check Router.js Scene key main 
    }

  render() {
    const { name } = this.props.shop.item;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;
