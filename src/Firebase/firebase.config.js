import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
