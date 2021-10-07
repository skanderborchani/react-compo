import './App.css';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';

function App() {
  return (
   <div>
     <ProfilePhoto></ProfilePhoto>
     <FullName></FullName>
     <Address></Address>
   </div>
  );
}

export default App;
