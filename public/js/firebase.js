let firebaseConfig = {
    apiKey: "AIzaSyCQ4qbXw-B0Oj0JmPU0ZKwz_pUaXfOwIWM",
    authDomain: "otarea-blog.firebaseapp.com",
    projectId: "otarea-blog",
    storageBucket: "otarea-blog.appspot.com",
    messagingSenderId: "170844929487",
    appId: "1:170844929487:web:84ee60c83da85998ef66ba"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();