import React from 'react';
import {observer} from 'mobx-react';
import {Link} from "react-toolbox/lib/link";
import {ListItem} from "react-toolbox/lib/list";
import style from "./style.scss"

function stopPropagation(e) {
    e.stopPropagation();
}

const Card = observer(props =>
    <div className={style.card}>
        <div className={style.upper}>
            <div className={style.name}>{props.item.name}</div>
            <div className={style.company}><Link onClick={stopPropagation} href={props.item.url}
                                                 label={props.item.company} target="_blank" theme={style}/></div>
        </div>
        <div className={style.lower}>
            <div className={style.row}>{props.item.phone} | <Link onClick={stopPropagation}
                                                                  href={`mailto:${props.item.emailUrl}`}
                                                                  label={props.item.email} theme={style}/></div>
            <div className={style.row}>{props.item.addressLine}</div>
        </div>
    </div>
);

// render one contact item
const ContactListItem = observer(props =>
    <ListItem
        selectable
        caption={props.item.name}
        legend={props.item.company}
        leftIcon={props.item.isCollapsed ? 'keyboard_arrow_down' : 'close'}
        itemContent={props.item.isCollapsed ? null : <Card item={props.item}/>}
        onClick={props.item.toggle}
    />
);

export default ContactListItem;
