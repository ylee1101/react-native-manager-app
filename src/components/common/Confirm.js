import React, { Component } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { containerStyle, textStyle, cardSectionStyle } = styles;

    return (
      <Modal
        visible={this.props.visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>
                {this.props.children} 
            </Text>
          </CardSection>

          <CardSection>
              <Button onPress={this.props.onAccept}>Yes</Button>
              <Button onPress={this.props.onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'  //it means everything inside of this container should be centered
    }
});

export { Confirm };
