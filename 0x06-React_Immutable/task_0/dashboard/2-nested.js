//get variables
//convert Js object to Map object
//loop over array
import { getIn, fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
	return getIn(fromJS(object), array);
}