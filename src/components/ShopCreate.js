//For add section
import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux"; //For add section
import { shopUpdate, shopCreate } from "../actions"; //For add section
import ShopForm from './ShopForm';
import _ from "lodash";


class ShopCreate extends Component {
  componentWillMount() {
    const clearData ={
      name: "",
      phone: "",
      shift: "",
    };
    _.each(clearData, (value, prop) => {
      this.props.shopUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.shopCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    // console.log(this.props.shop);
    return (
      <Card>
        <ShopForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.shopForm;

  return { name, phone, shift };
};

// const styles = StyleSheet.create({
//   pickerTextStyle: {
//     fontSize: 18,
//     paddingLeft: 20
//   }
// });

export default connect(mapStateToProps, {
  shopUpdate,
  shopCreate
})(ShopCreate);
