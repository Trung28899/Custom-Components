import React, { useState, useEffect } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

const ModalScreen = () => {
  //creating IP state
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
    // IP and geo data
    console.log(res.data);
    // device is a mobile or not, browser data
    console.log(window.clientInformation.userAgentData);
    // app Version
    console.log(window.clientInformation.appVersion);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <div>
      <Modal />
      <BackDrop show />
    </div>
  );
};

export default ModalScreen;
