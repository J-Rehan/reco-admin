let apiUrl;

if (process.env.REACT_APP_STATE === "production") {
  apiUrl = "https://api.petention.com/v1";
//   fireId = "2dfcd0388eada182a7504aec50296ebe";
//   firebaseConfig = {
//     apiKey: "AIzaSyAxC-irrzuOMNEL3TYIZ1o7049ftvFUIQE",
//     authDomain: "petention-admin.firebaseapp.com",
//     projectId: "petention-admin",
//     storageBucket: "petention-admin.appspot.com",
//     messagingSenderId: "73505657438",
//     appId: "1:73505657438:web:2af4a4f25f4a77d9ac5acf",
//     measurementId: "G-HK2LX54QW9",
//   };
} else if (process.env.REACT_APP_STATE === "staging") {
  apiUrl = "http://recobackend-env.eba-m6tynscj.us-east-1.elasticbeanstalk.com/v1";
//   fireId = "f0b87cc393dbc382d713475165b0a5eb";
//   firebaseConfig = {
//     apiKey: "AIzaSyDbF0G0L2xpCChGiq064flQM_sfmZI0QfA",
//     authDomain: "petentionadmin.firebaseapp.com",
//     databaseURL: "https://petentionadmin.firebaseio.com",
//     projectId: "petentionadmin",
//     storageBucket: "petentionadmin.appspot.com",
//     messagingSenderId: "756227256349",
//     appId: "1:756227256349:web:8f4f6e07a77f0db7af56f4",
//   };
} else if (process.env.REACT_APP_STATE === "development") {
  apiUrl = "http://localhost:3000/v1";
//   fireId = "f0b87cc393dbc382d713475165b0a5eb";
//   firebaseConfig = {
//     apiKey: "AIzaSyDbF0G0L2xpCChGiq064flQM_sfmZI0QfA",
//     authDomain: "petentionadmin.firebaseapp.com",
//     databaseURL: "https://petentionadmin.firebaseio.com",
//     projectId: "petentionadmin",
//     storageBucket: "petentionadmin.appspot.com",
//     messagingSenderId: "756227256349",
//     appId: "1:756227256349:web:8f4f6e07a77f0db7af56f4",
//   };
}

const config = {
    apiUrl: apiUrl,
  //   fireId: fireId,
  //   firebaseConfig: firebaseConfig,
  };
  
export default config;