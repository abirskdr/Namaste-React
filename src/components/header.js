import { useState } from 'react';

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/305754369_567106675207906_8742063842912374873_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NXjhILSenjgAX-CPMWR&_nc_ht=scontent.fccu10-1.fna&oh=00_AfA9DK6kvvOdj1uHD1Kg9pUfk1gFf3d7gIgoAhWd5oNDfA&oe=63D7C12E"
    />
  </a>
);

const loggedInUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsloggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsloggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
