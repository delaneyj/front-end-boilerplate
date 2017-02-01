import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';

export interface FooterProps {
};

export interface FooterState {
  /* empty */
}

export class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return (
      <footer className={style.normal}>
       footer
      </footer>
    );
  }
}

export default Footer;
