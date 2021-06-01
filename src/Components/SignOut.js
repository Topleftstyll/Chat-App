import { auth } from '../firebase';

const SignOut = () => {
    return auth.currentUser && (
        <button className="" onClick={() => auth.signOut()}>Sign Out</button>
    );
};

export default SignOut;
