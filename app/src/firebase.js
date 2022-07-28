import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKWQ7jbZPT3ag94i20hHyYDSnc9tzKgUc",
    authDomain: "my-e-commerce-project-fba40.firebaseapp.com",
    projectId: "my-e-commerce-project-fba40",
    storageBucket: "my-e-commerce-project-fba40.appspot.com",
    messagingSenderId: "1021375549706",
    appId: "1:1021375549706:web:d735654ffe471ba778aaf3",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
