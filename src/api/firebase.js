import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBYmZ24qqHe1e0yh8TD94LKejwfrAT2sII",
  authDomain: "onthecard2021.firebaseapp.com",
  databaseURL: "https://onthecard2021-default-rtdb.firebaseio.com",
  projectId: "onthecard2021",
  storageBucket: "onthecard2021.appspot.com",
  messagingSenderId: "1008594664326",
  appId: "1:1008594664326:web:2035d0cf73e1e99e250a07",
  measurementId: "G-NJLCFTNKHY",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.dataBase = firebase.database();
    this.storage = firebase.storage();
  }

  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  convertString(emailString) {
    const characters = {
      dot: { original: ".", replacement: "_" },
      hash: { original: "#", replacement: "-" },
      dollar: { original: "$", replacement: "" },
      squareOpen: { original: "[", replacement: "/" },
      squareClose: { original: "]", replacement: "|" },
    };
    let res = null;
    if (emailString.includes(characters.dot.original)) {
      res = emailString.replace(
        characters.dot.original,
        characters.dot.replacement
      );
      emailString = this.convertString(res);
    } else if (emailString.includes(characters.hash.original)) {
      res = emailString.replace(
        characters.hash.original,
        characters.hash.replacement
      );
      emailString = this.convertString(res);
    } else if (emailString.includes(characters.dollar.original)) {
      res = emailString.replace(
        characters.dollar.original,
        characters.dollar.replacement
      );
      emailString = this.convertString(res);
    } else if (emailString.includes(characters.squareOpen.original)) {
      res = emailString.replace(
        characters.squareOpen.original,
        characters.squareOpen.replacement
      );
      emailString = this.convertString(res);
    } else if (emailString.includes(characters.squareClose.original)) {
      res = emailString.replace(
        characters.squareClose.original,
        characters.squareClose.replacement
      );
      emailString = this.convertString(res);
    } else {
      return emailString;
    }
    return emailString;
  }

  async register(email, password, userName) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: userName,
    });
  }

  async addUser(email, fullName, userName, serialNumber, userNo) {
    const emailReformat = this.convertString(email);
    await this.dataBase.ref("userEmail/" + emailReformat).set({
      serialNo: serialNumber,
      userName: userName,
    });
    return this.dataBase.ref("users/" + userName).set({
      serialNo: serialNumber,
      fullName: fullName,
      email: email,
      userName: userName,
      userNum: userNo,
      userURL: userName,
      bio: "Your Bio",
      avatarURL: "",
      socialMediaList: [],
    });
  }

  async addUserToSerialNo(userName, serialNo, email) {
    return this.dataBase.ref("serialNo/" + serialNo).set({
      userName: userName,
      userRegistered: true,
      cardRegistered: true,
      email: this.convertString(email),
    });
  }

  async addSerialNo(serialNo) {
    if (serialNo) {
      return this.dataBase.ref("serialNo/" + serialNo).set({
        userName: "",
        userRegistered: false,
        cardRegistered: false,
        email: "",
      });
    }
  }

  async addSerialNoRegistered(serialNo) {
    if (serialNo) {
      return this.dataBase.ref("serialNo/" + serialNo).set({
        userName: "",
        userRegistered: false,
        cardRegistered: true,
        email: "",
      });
    }
  }

  updateImage(imageObject, imageName, userEmail) {
    return this.storage
      .ref("images/" + userEmail + "/" + imageName)
      .put(imageObject);
  }

  updateFiles(imageObject, imageName, userEmail) {
    return this.storage
      .ref("files/" + userEmail + "/" + imageName)
      .put(imageObject);
  }

  incrementUsers(userNumber) {
    const incre = userNumber + 1;
    console.log("in increment user");
    return this.dataBase.ref("userNumber/").set({
      userAmount: incre,
    });
  }

  updateData(dataObject, userName) {
    const { userInfo } = dataObject;
    return this.dataBase.ref("users/" + userName).update({
      fullName: userInfo.fullName,
      bio: userInfo.bio,
      avatarURL: userInfo.avatarURL,
      socialMediaList: userInfo.socialMediaList
        ? userInfo.socialMediaList
        : null,
      backgroundColor: userInfo.backgroundColor
        ? userInfo.backgroundColor
        : null,
      backgroundColorObject: userInfo.backgroundColorObject
        ? userInfo.backgroundColorObject
        : null,
      backgroundColorStyle: userInfo.backgroundColorStyle
        ? userInfo.backgroundColorStyle
        : null,
      backgroundImageUrl: userInfo.backgroundImageUrl
        ? userInfo.backgroundImageUrl
        : null,
      redirectMode: userInfo.redirectMode ? true : false,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getKeyStringByIndex(indexString) {
    try {
      return this.dataBase.ref().child("users/" + indexString);
    } catch (error) {
      alert("Trang Không Tồn Tại, Vui Lòng Thử Trang Khác !");
      alert("Link Not Existed ! Please Try Another Link !");
    }
  }

  getUserNumber() {
    return this.dataBase.ref().child("userNumber/userAmount");
  }

  getSerialNo(serialNo) {
    return this.dataBase.ref().child("serialNo/" + serialNo);
  }

  checkUserName(userName) {
    return this.dataBase.ref().child("users/" + userName);
  }

  getRealtimeInfo(userKey) {
    return this.dataBase.ref().child("users/" + userKey);
  }

  getUserName(email) {
    const emailReformat = this.convertString(email);
    return this.dataBase.ref().child("userEmail/" + emailReformat);
  }

  getUserNameBySerialNo(serialNo) {
    return this.dataBase.ref().child("serialNo/" + serialNo);
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  fetchSerialNo() {
    return this.dataBase.ref("serialNo");
  }

  cardRegisterBySerialNo(serialNo) {
    return this.dataBase.ref("serialNo/" + serialNo).set({
      userName: "",
      userRegistered: false,
      cardRegistered: true,
      email: "",
    });
  }

  getAllEmail() {
    return this.dataBase.ref().child("userEmail/");
  }

  async addSerialNoWithEmail(dataObject) {
    if (dataObject.serialNo) {
      return this.dataBase.ref("serialNo/" + dataObject.serialNo).set({
        userName: dataObject.userName,
        userRegistered: true,
        cardRegistered: true,
        email: dataObject.email,
      });
    }
  }

  storageObject() {
    return firebase.storage();
  }
}

export default new Firebase();
