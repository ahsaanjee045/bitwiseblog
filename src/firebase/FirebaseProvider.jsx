import React, { createContext, useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs, doc, getDoc } from "firebase/firestore"
import {getStorage, ref, uploadBytes} from "firebase/storage"


import app from "./firebase.config";
import { data } from "autoprefixer";

export const FirebaseContext = createContext();

const auth = getAuth(app);
const storage = getStorage(app)
const database = getFirestore(app)

const FirebaseProvider = ({ children }) => {
  const signup = async ({ email, password }) => {
    try {
      let userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userInfo.user;
    } catch (error) {
      console.log("ERROR IN FIREBASE REGISTER METHOD -", error);
      return null;
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      let userInfo = await signInWithEmailAndPassword(auth, email, password);
      return userInfo.user;
    } catch (error) {
      console.log("ERROR IN FIREBASE LOGIN METHOD -", error);
      return null;
    }
  };

  const logout = async() => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        console.log("ERROR IN FIREBASE SINGOUT METHOD -", error);
        return null; 
    }
  }


  const uploadFile = async({title, slug, file, content, userid, username, summary})  => {
    try {
        // let file = a
        // console.log(file)
        let imageref = ref(storage, "uploads/" + file.name.split(" ").join("-"))
        let image = await uploadBytes(imageref, file)

        if(image.ref.fullPath){
          let doc = await addDoc(collection(database, "blogs"), {
            title, 
            slug,
            thumbnail: image.ref.fullPath,
            content,
            userid,
            username,
            summary
          })
          console.log(doc)
          return true
        }else{
          return null
        }


    } catch (error) {
        console.log("ERROR IN FIREBASE IMAGE UPLOAD METHOD -", error);
        return null
    }
  }


  const getPosts = async () => {
    try {
        let posts = await getDocs(collection(database, "blogs"))
        console.log(posts)
        return posts.docs
    } catch (error) {
      console.log("ERROR IN FIREBASE GETPOSTS METHOD -", error)
      return null
    }
  }

  const getSinglePost = async (postid) => {
    try {
        let docRef = doc(database, "blogs", postid)
        let post = await getDoc(docRef)
        if(post){
          return post.data()
        }
        return null
    } catch (error) {
      console.log("ERROR IN FIREBASE GET SINGLE POST METHOD -", error)
      return null
    }
  }

  return (
    <FirebaseContext.Provider value={{ signup, loginUser, logout, uploadFile, getPosts, getSinglePost }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;


export const useFirebaseContext = () => useContext(FirebaseContext)
