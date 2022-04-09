
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgPuMN2AOAlgShOyCrPj8fKl_baT8PcD0",
    authDomain: "diego-vehiculos-dl.firebaseapp.com",
    projectId: "diego-vehiculos-dl",
    storageBucket: "diego-vehiculos-dl.appspot.com",
    messagingSenderId: "676977874125",
    appId: "1:676977874125:web:31703a97537a86e012c584",
    measurementId: "G-DMSG400CTZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
