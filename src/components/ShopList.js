import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux"; //For add section
import { shopsFetch } from "../actions"; //For add section
import _ from "lodash";
import ListItem from "./ListItem";

class ShopList extends Component {
  componentWillMount() {
    this.createDataSource();
  }

  createDataSource() {
    this.props.shopsFetch();
  }
  renderRow(shop) {
    return <ListItem shop={shop} />;
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.shops}
        renderItem={this.renderRow}
        keyExtractor={shop => shop.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const shops = _.map(state.shops, (val, uid) => {
    return { ...val, uid };
  });

  return { shops };
};

const styles = StyleSheet.create({});

export default connect(mapStateToProps, { shopsFetch })(ShopList); //For add section
// export default ShopList;
