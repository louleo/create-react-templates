import {actionTypes} from "./action-types";


export const reducer = (states, action) => {
    switch (action.type) {
        case actionTypes.INIT:
            return {
                ...states,
                num:action.payload
            };
        case actionTypes.CLEAR:
            return {
                ...states,
                num:action.payload
            };
        case actionTypes.INCREMENT:
            return {
                ...states,
                num:action.payload
            };
        case actionTypes.DECREMENT:
            return {
                ...states,
                num:action.payload
            };
        default:
            return states || {};
    }
}
