import * as React from 'react';

export interface HeaderProps {
}

export interface HeaderState {
  /* empty */
}

export class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props?: HeaderProps, context?: any) {
    super(props, context);
  }


  render() {
    return (
      <header>
        header
      </header>
    );
  }
}

export default Header;
