import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AppStore, RouterStore } from '../../stores';
import * as style from './style.css';

import 'antd/dist/antd.less';
import { LocaleProvider, DatePicker } from 'antd';
import * as enUS from 'antd/lib/locale-provider/en_US';

export interface AppProps {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
  // [STOURE_TODO]: TodoStore;
}

export interface AppState {
}

@inject('app', 'router')
@observer
export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps, context: any) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps: AppProps, nextContext: any) {
  }

  render() {
    const { children } = this.props;

    return (
      <LocaleProvider locale={enUS} >
        <div>
          <Header />
          <DatePicker />
          {children}
          <Footer />
        </div>
      </LocaleProvider>
    );
  }
};
