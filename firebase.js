// firebase.js
import { initializeApp } from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBEtH5xndY6RLKoKVW13ElZS69S2WqHvtc",
  authDomain: "jobsearch-f758a.firebaseapp.com",
  projectId: "jobsearch-f758a",
  storageBucket: "jobsearch-f758a.firebasestorage.app",
  messagingSenderId: "803290054925",
  appId: "1:803290054925:web:a69091e267c4f43a177044",
  measurementId: "G-QW1HB193GG"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
