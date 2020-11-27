import React from 'react';

const Navbar = ({children}) => {
  /**
   * @description creates react UI component that renders its children by wrapping them inside Navbar component
   */
  return (
    <nav>
      {children}
    </nav>
  )
}

export default Navbar;
