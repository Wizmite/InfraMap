import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = { /* Your Firebase Config */ };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
