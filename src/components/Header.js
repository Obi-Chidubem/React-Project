//use 'rafce' as a shortcut to add everything below
// const Header = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Header

import PropTypes from "prop-types";
import Button from "./button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//This is how o add styling to the differnt functions.
// const HeadingStyle = {
//   color: "red",
// };

export default Header;
