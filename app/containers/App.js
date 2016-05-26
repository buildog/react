import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { routerMiddleware, push } from 'react-router-redux';
import configureStore from '../store/configureStore';
const store = configureStore();

import styles from '../styles/theme.css';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Person from '../components/Person';

export class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentWillMount () {
      this.checkAuth();
  }

  componentWillReceiveProps (nextProps) {
      /* Redirect if the auth state change*/
      this.checkAuth();
  }

  checkAuth () {
      if (!this.props.isAuthenticated) {
          store.dispatch(push('/'))
      }
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.body}>
            
            <div className={styles.sidebar}>
              <Sidebar />
            </div>

            <div className={styles.main}>
             <Timeline />
            </div>

            <div className={styles.panel}>
              {this.props.children}
            </div>

            

        </div>

        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}




const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);

