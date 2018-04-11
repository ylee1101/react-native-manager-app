//For edit section
import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Card, CardSection, Button, Confirm } from "./common";
import { connect } from "react-redux"; //For add section
// import { shopUpdate, shopCreate } from "../actions"; //For add section
import ShopForm from "./ShopForm";
import { shopUpdate, shopSave, shopDelete } from "../actions";
import _ from "lodash";
import Communications from 'react-native-communications';


class ShopEdit extends Component {
    state = { showModal: false }; // this is for delete button

  componentWillMount() {
    _.each(this.props.shop.item, (value, prop) => {
      //we are iterating every props of shop object
      this.props.shopUpdate({ prop, value }); //we are updating them
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.shopSave({ name, phone, shift, uid: this.props.shop.uid });
  }

  componentWillUnMount() {
    const clearData = {
      name: "",
      phone: "",
      shift: "Monday"
    };

    _.each(clearData, (value, prop) => {
      this.props.shopUpdate({ prop, value });
    });
  }

  //text section starts
  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your Upcomming shift is on ${shift}`)
  }
  //text section ends

  onAccept() {
    const { uid } = this.props.shop;

    this.props.shopDelete({ uid });
  }

  onDecline() {
      this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <ShopForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection> 
            <Button onPress={this.onTextPress.bind(this)}>
                Text Schedule
            </Button>
        </CardSection>

        <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                Delete Shop
            </Button>
        </CardSection>

        <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
        >
            Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.shopForm;

  return { name, phone, shift };
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

export default connect(mapStateToProps, { shopUpdate, shopSave, shopDelete })(ShopEdit);
