import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./store/index.tsx";
import {
  DatabaseProvider,
  useFirebaseApp,
  FirebaseAppProvider,
  StorageProvider,
  AuthProvider,
} from "reactfire";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import App from "./App.tsx"; 
import "./index.css";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const FirebaseComponent = () => {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  return (
    <ContextProvider>
      <DatabaseProvider sdk={database}>
        <StorageProvider sdk={storage}>
          <AuthProvider sdk={auth}>
            <App />
          </AuthProvider>
        </StorageProvider>
      </DatabaseProvider>
    </ContextProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={JSON.parse(firebaseConfig)}>
      <FirebaseComponent />
    </FirebaseAppProvider>
  </StrictMode>
);
