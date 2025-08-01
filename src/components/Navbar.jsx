import './Navbar.css';

function Navbar({ goTo, current }) {
  return (
    <nav className="navbar">
      <button onClick={() => goTo('home')} className={current === 'home' ? 'active' : ''}>Home</button>
      <button onClick={() => goTo('about')} className={current === 'about' ? 'active' : ''}>About</button>
      <button onClick={() => goTo('users')} className={current === 'users' ? 'active' : ''}>Users</button>
    </nav>
  );
}

export default Navbar;
