import React from 'react';
import {observer} from 'mobx-react';
import {List} from "react-toolbox/lib/list";
import ContactListItem from "./ContactListItem";

const ContactList = observer(props =>
    <List selectable ripple>
        {
            props.list.map(item =>
                <ContactListItem key={item.key} item={item}/>
            )
        }
    </List>
);

export default ContactList;
