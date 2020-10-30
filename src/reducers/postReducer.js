import { bindActionCreators } from 'redux';
import { FETCH_POST , NEW_POST} from '../actions/types';

const initialState = {
    Items: [],
    Item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POST: {
            return {
                ...state,
                Items: action.payload
            }
        }

        case NEW_POST: {
                return {
                    ...state,
                    Item: action.payload
                }
        }

         default :{
             return state;
        }
    }
}