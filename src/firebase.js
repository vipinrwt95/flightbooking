import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { collection, addDoc } from 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTlLxQfiTmUTjad5HCkjJudLNzIjIfMUk',
  authDomain: 'flightbooking-dummy.firebaseapp.com',
  projectId: 'flightbooking-dummy',
  storageBucket: 'flightbooking-dummy.appspot.com',
 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
