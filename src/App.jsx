import logo from './logo.svg';
import './App.css';

import Profile from './component/profile/Profile';


function App() {
  function handleName(){
    alert('Ibtissam')
  }
  return (
    <div className="flex flex-col items-center">
     {/* <ProfilePhoto/>
     <FullName/>
     <Address/> */}
     <Profile bio='sgdhxjxfjx' profession='jefkgbks' handleName={handleName} >
    <img src="/logo192.png" alt="" />
     </Profile >
    </div>
  );
}

export default App;
