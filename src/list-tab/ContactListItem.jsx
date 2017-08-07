import React from 'react';
import {observer} from 'mobx-react';
import {ListItem} from "react-toolbox/lib/list";

// render one contact item
const ContactListItem = observer(props =>
    <ListItem
        caption={props.item.name}
        legend={props.item.legend}
        leftIcon='keyboard_arrow_down'
    />
);

export default ContactListItem;
