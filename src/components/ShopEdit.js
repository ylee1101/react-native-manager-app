//For edit section
import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Card, CardSection, Button } from "./common";
import { connect } from "react-redux"; //For add section
// import { shopUpdate, shopCreate } from "../actions"; //For add section
import ShopForm from "./ShopForm";
import { shopUpdate, shopSave } from '../actions';
import _ from 'lodash';

class ShopEdit extends Component {
    componentWillMount() {
        _.each(this.props.shop.item, (value, prop) => {  //we are iterating every props of shop object
            this.props.shopUpdate({ prop, value})  //we are updating them
        })
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.shopSave({ name, phone, shift, uid: this.props.shop.uid })
    }

  render() {
    return (
      <Card>
          <ShopForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.shopForm;

    return { name, phone, shift }
}


const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

export default connect(mapStateToProps, { shopUpdate, shopSave })(ShopEdit);
