import React from 'react';
import {observer} from 'mobx-react';
import {List} from "react-toolbox/lib/list";
import {ListItem} from "react-toolbox/lib/list";
import {ListSubHeader} from "react-toolbox/lib/list";
import {ListDivider} from "react-toolbox/lib/list";

const AdminTab = observer(props => {

    // prepare one array of list items and sub-headers
    const listItems = props.adminTabManager.listForDisplay.reduce((arr, letter) => {
        if (letter.items.length) {
            arr.push(<ListSubHeader key={letter.letter} caption={`${letter.letter} (${letter.items.length})`}/>);
            arr.push(...letter.items.map(item => <ListItem
                key={letter.letter + item.id}
                caption={item.name}
                legend={item.company && item.company.name}
            />));
            arr.push(<ListDivider key={'_' + letter.letter}/>);
        }
        return arr;
    }, []);

    // render this array
    return <List>{listItems}</List>;
});

export default AdminTab;
