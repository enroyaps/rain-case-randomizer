// Paste the real values from Firebase Console > Project Settings > Your apps > Web app.
// These are public client identifiers, not secrets — Firestore Security Rules do the
// actual access control, not this file.
export const firebaseConfig = {
  apiKey: "AIzaSyCUHHAex2aPs-Ugs2cnWtXdJxzD3K09OZE",
  authDomain: "enroyaps.firebaseapp.com",
  projectId: "enroyaps",
  storageBucket: "enroyaps.firebasestorage.app",
  messagingSenderId: "159292413408",
  appId: "1:159292413408:web:e5866913b9adbc25fc8785"
};

export const CONFIG_IS_SET = firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY_HERE";
