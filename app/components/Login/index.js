import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Login.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as frontActions from '../../actions/form';

class Login extends Component {

	static propTypes = {
	   login: PropTypes.func.isRequired,
	   validateEmail: PropTypes.func.isRequired,
	   hasValidEmail : PropTypes.bool.isRequired,
	   email : PropTypes.string
	};

	render() {
    const { login, validateEmail, hasValidEmail, email } = this.props;
		//console.log(this.props.children);
		return (
			<div className={styles.root}>
				<form onSubmit={login} >
					<h1 className={styles.logo}>blockyc</h1>
					<h2>what's your email?</h2>
					<input type="text" name="email" placeholder="john@doe.com" autoFocus onChange={validateEmail} />
					{ hasValidEmail ? 
					<button>
						press enter key <i className="fa fa-keyboard-o fa-1x" /> to validate.
						<small>or just click here.</small>
					</button>
					:""}
				</form>
			</div>
		);
	}
}


function mapStateToProps(state) {
  return {
    hasValidEmail: state.user.hasValidEmail,
    email:state.user.email
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(frontActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


