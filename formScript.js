// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBiR5ze9QTdibS2fmAwo_meOphxh6XoDRI',
  authDomain: 'contactform-4b021.firebaseapp.com',
  databaseURL: 'https://contactform-4b021.firebaseio.com',
  projectId: 'contactform-4b021',
  storageBucket: 'contactform-4b021.appspot.com',
  messagingSenderId: '1011740730129',
  appId: '1:1011740730129:web:d7283a13cf7c4f1e6fe2b0'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Reference collections
const messagesRef = firebase.database().ref('messages')

const form = document.getElementById('form')

const getInputVal = (id) => {
  return document.getElementById(id).value
}

// Fonction that save messages to firebas
const saveMessage = (username, email, password, message) => {
  const newMessageRef = messagesRef.push()
  newMessageRef.set({
    username: username,
    email: email,
    password: password,
    message: message
  })
}

const submitForm = (event) => {
  event.preventDefault()
  const username = getInputVal('username')
  const email = getInputVal('email')
  const password = getInputVal('password')
  const message = getInputVal('message')
  saveMessage(username, email, password, message)
}

form.addEventListener('submit', submitForm)
