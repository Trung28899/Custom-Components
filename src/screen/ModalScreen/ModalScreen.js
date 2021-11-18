import React, { useState, useEffect } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

const ModalScreen = () => {
  //creating IP state
  const [ip, setIP] = useState("");

  // This API is more accurate
  // https://ip-api.com/

  //creating function to load ip address from the API
  const getData = async () => {
    // const res = await axios.get("https://geolocation-db.com/json/");
    // see documentation: https://ip-api.com/docs/api:json
    const res = await axios.get(
      "http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"
    );
    setIP(res.data.IPv4);
    // IP and geo data
    console.log(res.data);
    // device is a mobile or not, browser data
    console.log(window.clientInformation.userAgentData);
    // app Version
    console.log(window.clientInformation.appVersion);
    // ip
    console.log(ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  });

  return (
    <div>
      <Modal />
      <BackDrop show />
    </div>
  );
};

export default ModalScreen;
