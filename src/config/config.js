export const config = {
  firebaseAPIKey : String(import.meta.env.FIREBASE_API_KEY),
  authDomain : String(import.meta.env.FIREBASE_AUTH_DOMAIN),
  projectId : String(import.meta.env.FIREBASE_PROJECT_ID),
  storageBucket : String(import.meta.env.FIREBASE_STORAGE_BUCKET),
  senderId : String(import.meta.env.FIREBASE_MESSAGE_SENDER_ID),
  appid : String(import.meta.env.FIREBASE_APP_ID),
};
