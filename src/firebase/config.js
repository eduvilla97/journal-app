// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


console.log({ process.env.APIKEY });

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA6c4pFXDySWmDkUNwzAFve3qb-YRrHoc8",
	authDomain: "react-cursos-6dacd.firebaseapp.com",
	projectId: "react-cursos-6dacd",
	storageBucket: "react-cursos-6dacd.appspot.com",
	messagingSenderId: "857796260570",
	appId: "1:857796260570:web:d4d71fbfd1a2cf24f8ebe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);