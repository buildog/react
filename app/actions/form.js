let utils = require('../utils');
import { routerMiddleware, push } from 'react-router-redux';

/*
 * action types
 */

export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const LOGIN = 'LOGIN';

/*
 * action creators
 */

export function handleSubmit(e,type){
 
   	e.preventDefault();

	var data = {};
	var inputs = [].slice.call(e.target.getElementsByTagName('input'));
	inputs.forEach(input => {
	  data[input.name] = input.value;
	});

  	return { type:type, data};
}

export function inputChange(e,type) {
  var text = e.target.value;
  return { type:type, text }
}


export function validateEmail(e){
 
  return (dispatch, getState) => {
 	
 	/* check mail validity*/
  	var email = e.target.value;
  	var validity = utils.validateEmail(email) ? true : false;

  	/* usefull 2 update? */
    const state = getState();
    if (state.user.hasValidEmail != validity){
    	dispatch({ type:VALIDATE_EMAIL, validity });
    } 

  }
}


/* action */


export function login(e){
  return dispatch => { 
  	dispatch(handleSubmit(e,LOGIN));
  	dispatch(push('/app'));
  };
}

