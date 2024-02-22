const firebaseConfig = {
    apiKey: "AIzaSyC6rz1vhrvWluHMS_I5FkRhIIsW4e7Vf40",
    authDomain: "student-1b2a3.firebaseapp.com",
    databaseURL: "https://student-1b2a3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "student-1b2a3",
    storageBucket: "student-1b2a3.appspot.com",
    messagingSenderId: "169791015058",
    appId: "1:169791015058:web:8274a2a7424e3d74713e4b"
  };
  firebase.initializeApp(firebaseConfig);
  const studentDB = firebase.database().ref("student");
  document.getElementById('student').addEventListener()