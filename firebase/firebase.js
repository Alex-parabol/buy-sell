import app from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/storage'; 

import firebaseConfig from './config';

class Firebase {
    constructor(){
        if(!app.apps.length){
             app.initializeApp(firebaseConfig)
            
        }
        this.auth = app.auth()
       
    }

    //we add a method to register a new user.

    async register(name, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(email,password);

        // because we want to show the name of the user, we use the method inside of firebase to do so.
        return await newUser.user.updateProfile({
            displayName: name
        })
    }
}

const firebase = new Firebase();

export default firebase;