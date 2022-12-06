import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAgWdTFTRBiiV_OkRFJeZT7H4d0LRr2ajA",
    authDomain: "twiter-v2.firebaseapp.com",
    projectId: "twiter-v2",
    storageBucket: "twiter-v2.appspot.com",
    messagingSenderId: "942904208345",
    appId: "1:942904208345:web:7fb105f84e0a3887ad47c8"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db}