
import * as formActions from '../actions/form';


/* Fetch user data via FeatherJS*/

const initialState = {
  hasValidEmail: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  	
  	case formActions.VALIDATE_EMAIL:
    return Object.assign({}, state, { hasValidEmail: action.validity });

    case formActions.LOGIN:
	return Object.assign({}, state, { email: action.data.email, isAuthenticated:true });

    default: return state
  }


  return state
}