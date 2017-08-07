import React from 'react';
import {observer} from 'mobx-react';
import ContactListItem from "./ContactListItem";

const ContactList = observer(props =>
    <div>
        {
            props.contactListManager.listForDisplay.map(item =>
                <ContactListItem key={item.key} item={item}/>
            )
        }
    </div>
);

export default ContactList;
