// Way to add CSS in React
// It is an object in js

const styleLogo = {
    width:"60px",
}
const Title = () => {
    return (
      <img
        alt="Logo"
        src="https://10619-2.s.cdn12.com/rests/original/340_328462255.jpg"
        style = {styleLogo}
      />
    );
};

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;