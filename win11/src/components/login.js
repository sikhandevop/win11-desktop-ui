import "firebase/compat/auth";
import firebase from "firebase/compat/app";

firebase.initializeApp({
	apiKey: 'AIzaSyAw82pxy8IjTroa9BwjRs05L7x7w1v3abA',
	authDomain: 'win-11-ui.firebaseapp.com',
	projectId: 'win-11-ui',
	storageBucket: 'win-11-ui.appspot.com',
	messagingSenderId: '597762564198',
	appId: '1:597762564198:web:27230c0ef2fe6d08298da7',
	measurementId: 'G-ZC324SZFRP',
})

const auth = firebase.auth()
const githubLoginProvider = new firebase.auth.GithubAuthProvider()

async function login() {
  auth.signInWithPopup(githubLoginProvider).then((res) => {
    const token = res.credential.accessToken;
    const user = res.additionalUserInfo.username;
    const email = res.user.email;
    console.log(res);
  });
}
export default login;
