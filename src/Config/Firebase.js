import * as firebase from 'firebase';
import Swal from 'sweetalert2';
var firebaseConfig = {
    apiKey: "AIzaSyAiF1TLmawl3_lP55X6ZEFH1yE0sIq-6Nc",
    authDomain: "carousel-4ddbf.firebaseapp.com",
    databaseURL: "https://carousel-4ddbf.firebaseio.com",
    projectId: "carousel-4ddbf",
    storageBucket: "carousel-4ddbf.appspot.com",
    messagingSenderId: "449537455150",
    appId: "1:449537455150:web:07cd07dd482eaac5c1dbbf",
    measurementId: "G-X8XRFPPZ35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Register(email,password,Firstname,Lastname)
  {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
        console.log("user=================>",user)
    }).then(()=>{
        let userobject=
        {
            email,
            password,
            Firstname,
            Lastname
        }
       var userkey= firebase.database().ref('UserInfo/').push(userobject).key;
       console.log(userkey)
       Swal.fire({
        title:'Sucess',
        text:'Successfully SignIn',
        icon:'success',
        button:'Go'
       })
    }).catch((error)=>{
        Swal.fire(error.message,'Something wrong','warning')

    })    
}

function Login(email,password)
{
    firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
        console.log("success===========>",user)
    }).catch((error)=>{
        Swal.fire(error.message,'Something wrong','warning')
    })

}
// if(userid!=undefined && userid!=null)
// {

//     user.sendEmailVerification(email).then((result) =>{
//         console.log("result",result)
    
//     }).catch((error)=>{
//         console.log("error",error)

//     })

//     }
//     else
//     {
        
//         console.log("error");
//     }
//}
  export{
      Register,
      firebase,
      Login,
    
    }
  