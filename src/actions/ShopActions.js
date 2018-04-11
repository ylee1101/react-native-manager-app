//For add section
import firebase from "firebase";
import Actions from "react-native-router-flux";
import { SHOP_UPDATE, SHOP_CREATE, SHOPS_FETCH_SUCCESS } from "./types";

export const shopUpdate = ({ prop, value }) => {
  //예를 들어 prop = shift, value = 3으로 바꾼다 라고 가정하에 저렇게 두개를 넣은다.
  return {
    type: SHOP_UPDATE,
    payload: { prop, value }
  };
};

export const shopCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/shops`) //es6 style back ticks, put javascript variable into the ${}
      .push({ name, phone, shift })
      .then(() =>
        //{
        //dispatch({ type: SHOP_CREATE })
        Actions.pop()
      );
    //})
  };
};

export const shopsFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/shops`)
      .on("value", snapshot => {
        dispatch({ type: SHOPS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const shopSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/shops/${uid}`)
      .set({ name, phone, shift })
      .then(() => 
        Actions.pop()
      );
  };
};

export const shopDelete = ({ uid}) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/shops/${uid}`)
    .remove()
    .then(() => 
      Actions.pop()
    )
  }
}