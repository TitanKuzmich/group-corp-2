import React from 'react';

import {Message} from './Messages.jsx';

export const MessagesCheck = (props) => {

    return props.items.map((item, index) => (<Message msgText={item.text} msgTime={item.time} msgType={item.type} key={index} />));
};