// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
     GoogleAuthProvider,
     getAuth,
     signInWithPopup,
     signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     sendPasswordResetEmail,
     signOut,
} from "firebase/auth";

import {
     getFirestore,
     query,
     getDocs,
     collection,
     where,
     addDoc,
} from "firebase/firestore";

import {
     getStorage,
     ref,
     uploadBytes,
     getDownloadURL
} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASe7919Evw9fV-RP-znbhCr_UrKoaiVPw",
  authDomain: "itstep-diploma-57eac.firebaseapp.com",
  projectId: "itstep-diploma-57eac",
  storageBucket: "itstep-diploma-57eac.appspot.com",
  messagingSenderId: "921814787745",
  appId: "1:921814787745:web:c5646a6e336d3de46832e0",
  measurementId: "G-8T37PGHCXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

/*###############################################################*/

async function addAdvertisement (estateType, area, price, payType, image) {
  try {
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then((url) => {
        adding(url);
        console.log(url)
      }).catch((error) => {
        console.log(error.message, "error getting the image url")
      })
    })

    async function adding(urlB) {
      await addDoc(collection(db, "advertisements"), {
        estateType: estateType,
        area: area,
        price: price,
        payType: payType,
        imgUrl: urlB
      });
    }
  }

  catch (err) {
    console.error(err);
    alert(err.message);
  }
}

async function getAdvertisements () {
  try {
    const queryAds = await getDocs(collection(db, "advertisements"));
    const response = [];

    queryAds.forEach((doc) => {
      response.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return response;
  }

  catch (err) {
    console.error(err);
    alert(err.message);
  }
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  addAdvertisement,
  getAdvertisements
};