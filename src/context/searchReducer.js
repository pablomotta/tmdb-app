import {
    SEARCH_ACTOR,
    SELECT_ACTOR,
    COMPARE_CREDITS,
    DELETE_ACTOR
} from './types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_ACTOR:
            return {
                ...state,
                actors: action.payload,
                loading: false
            };
        case SELECT_ACTOR:
            return {
                ...state,
                actor: action.payload,
                loading: false
            };
        case COMPARE_CREDITS:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };

        case DELETE_ACTOR:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact._id !== action.payload
                ),
                loading: false
            };
        // case FILTER_CONTACTS:
        //     return {
        //         ...state,
        //         filtered: state.contacts.filter(contact => {
        //             const regex = new RegExp(`${action.payload}`, 'gi');
        //             return (
        //                 contact.name.match(regex) || contact.email.match(regex)
        //             );
        //         })
        //     };

        case SEARCH_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
