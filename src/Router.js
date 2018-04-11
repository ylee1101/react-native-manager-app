import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import ShopList from "./components/ShopList";
import ShopCreate from './components/ShopCreate'; //For Add section
import ShopEdit from './components/ShopEdit'; //For edit section

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene
              key="login"
              component={LoginForm}
              title="Please Login"
              initial
            />
          </Scene>
          <Scene key="main">
            <Scene 
                key="shopList" 
                component={ShopList} 
                title="Shops" 
                rightTitle="Add" //for add section
                onRight={() => Actions.shopCreate()} // for add section
            />

            <Scene key="shopCreate" component={ShopCreate} title="Create Shop" />
            <Scene key="shopEdit" component={ShopEdit} title="Edit Shop" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({});

export default RouterComponent;
