let apiUrl;
let xApiKey;
let firebaseConfig={};

if (process.env.REACT_APP_STATE === "production") {
  apiUrl = "https:/";
  firebaseConfig = {
    apiKey: "AIzaSyAqCrmCSiX4Gcrf5a08evNcTtxTh98-cCc",
    authDomain: "recoapp-19f88.firebaseapp.com",
    projectId: "recoapp-19f88",
    storageBucket: "recoapp-19f88.appspot.com",
    messagingSenderId: "680284497922",
    appId: "1:680284497922:web:4b74fc88d2cba01c155f1b",
  };
} else if (process.env.REACT_APP_STATE === "staging") {
  apiUrl =
    "http://recobackend-env.eba-m6tynscj.us-east-1.elasticbeanstalk.com/v1";
  firebaseConfig = {
    apiKey: "AIzaSyAqCrmCSiX4Gcrf5a08evNcTtxTh98-cCc",
    authDomain: "recoapp-19f88.firebaseapp.com",
    projectId: "recoapp-19f88",
    storageBucket: "recoapp-19f88.appspot.com",
    messagingSenderId: "680284497922",
    appId: "1:680284497922:web:4b74fc88d2cba01c155f1b",
    
  };
  xApiKey= "1ab2c3d4e5f61ab2c3d4e5f6";
} else if (process.env.REACT_APP_STATE === "local") {
  apiUrl = "http://localhost:3000/v1";
  firebaseConfig = {
    apiKey: "AIzaSyAqCrmCSiX4Gcrf5a08evNcTtxTh98-cCc",
    authDomain: "recoapp-19f88.firebaseapp.com",
    projectId: "recoapp-19f88",
    storageBucket: "recoapp-19f88.appspot.com",
    messagingSenderId: "680284497922",
    appId: "1:680284497922:web:4b74fc88d2cba01c155f1b",
  };
  xApiKey= "1ab2c3d4e5f61ab2c3d4e5f6";

}

const config = {
  apiUrl: apiUrl,
  firebaseConfig: firebaseConfig,
  xApiKey:xApiKey
};

export default config;
