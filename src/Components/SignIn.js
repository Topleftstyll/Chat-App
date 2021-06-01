import firebase from 'firebase';
import { auth } from '../firebase';

const SignIn = () => {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button className="" onClick={SignInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned!</p>
        </div>
    );
};

export default SignIn;
