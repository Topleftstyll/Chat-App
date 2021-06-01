import './App.css';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './Components/ChatRoom';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
          <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
