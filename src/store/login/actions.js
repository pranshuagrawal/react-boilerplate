import * as TYPES from './types';

export const performLogin = (payload) => ({
    type: TYPES.PERFORM_LOGIN,
    payload
});

export const clearLoginDetails = () => ({
    type: TYPES.CLEAR_PERFORM_LOGIN
});