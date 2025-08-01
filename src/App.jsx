import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

function App() {
  const [route, setRoute] = useState('home');
  const [selectedUser, setSelectedUser] = useState(null);

  const goTo = (page) => {
    setSelectedUser(null);
    setRoute(page);
  };

  const goToUserDetail = (user) => {
    setSelectedUser(user);
    setRoute('userDetail');
  };

  return (
    <>
      <Navbar goTo={goTo} current={route} />
      <div className="container">
        {route === 'home' && <Home />}
        {route === 'about' && <About />}
        {route === 'users' && <Users onUserClick={goToUserDetail} />}
        {route === 'userDetail' && selectedUser && (
          <UserDetail user={selectedUser} goBack={() => goTo('users')} />
        )}
      </div>
    </>
  );
}

export default App;
