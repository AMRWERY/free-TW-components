import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbWNT-4vyCDSqB38KK2I-cdmW409lNkCw",
  authDomain: "free-tw-components.firebaseapp.com",
  projectId: "free-tw-components",
  storageBucket: "free-tw-components.firebasestorage.app",
  messagingSenderId: "140411028265",
  appId: "1:140411028265:web:530c043c9999df60382d38",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Persistent IndexedDB cache — subsequent page loads are served instantly
// from the local cache while Firestore syncs in the background.
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export { auth, db };
