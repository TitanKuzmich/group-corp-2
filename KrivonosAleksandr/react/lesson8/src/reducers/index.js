import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import {chatsReducer} from './chats';
import {profileReducer} from "./user";

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    profile: profileReducer
});