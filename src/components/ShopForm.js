//For edit section
import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { CardSection, Input } from "./common";
import { connect } from "react-redux"; 
import { shopUpdate } from "../actions"; //For add section

class ShopForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text =>
              this.props.shopUpdate({ prop: "name", value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={text =>
              this.props.shopUpdate({ prop: "phone", value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.shopUpdate({ prop: "shift", value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
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

export default connect(mapStateToProps, { shopUpdate })(ShopForm);
