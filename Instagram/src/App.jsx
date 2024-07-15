
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes} from "react-router-dom";
import { auth } from "./firebase/firebase";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import AuthPage from "./pages/AuthPage";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';


function App() {
  const [authUser] = useAuthState(auth);  //checks if user authenticated from firebase 

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth'/>}/>
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/'/>}/>
        <Route path='/:username' element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
  )
}

export default App
