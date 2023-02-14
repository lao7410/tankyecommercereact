
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCbPU6aXtGLWIafUIQ6iElgo6ZcLKEnFbI",
    authDomain: "ecommerce-tanky.firebaseapp.com",
    projectId: "ecommerce-tanky",
    storageBucket: "ecommerce-tanky.appspot.com",
    messagingSenderId: "1001020730573",
    appId: "1:1001020730573:web:3a8e8253736f1b07a1cd84"
};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}