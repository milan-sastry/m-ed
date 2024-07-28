import { Outlet } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utils/firebase";
import Navbar from "../oldComponents/misc/Navbar";





function WebApp() {
  const [user] = useAuthState(auth);
  if (!user) {
    return <div style={{ backgroundColor: 'red', height: '100vh', width: '100vw' }}></div>;
  }


  return (
    <div className="flex h-screen max-w-screen">
      <Navbar user={user}/>
      <Outlet />
    </div>
      
  );
}

export default WebApp;
