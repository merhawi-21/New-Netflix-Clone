// Import the functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUI5jgEuFmwzW1Tx_OA7QFCDCdVsL7Bw",
  authDomain: "netflix-clone-aaf3b.firebaseapp.com",
  projectId: "netflix-clone-aaf3b",
  storageBucket: "netflix-clone-aaf3b.firebasestorage.app",
  messagingSenderId: "72878489125",
  appId: "1:72878489125:web:7a3c1809d7991fb4edc9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//User signup function
const signup = async(name,email,password)=>{
    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db,"user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


//User login function
const login = async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

//User logouty function

const logout = async()=>{
  signOut(auth);
}

export {auth,db,signup,login,logout}