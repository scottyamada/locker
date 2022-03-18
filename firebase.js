import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCur-hiAFcQLGfDUQ4iqi4P00HD-H9QevU",
  authDomain: "locker-sda.firebaseapp.com",
  projectId: "locker-sda",
  storageBucket: "locker-sda.appspot.com",
  messagingSenderId: "602646473002",
  appId: "1:602646473002:web:aa9ba144a6b67ada1dd653",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
