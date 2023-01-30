import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import FullName from './component/Profile/FullName';
import Address from './component/Profile/Address';


function App() {
  return (
    <div className="flex flex-col items-center">
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
