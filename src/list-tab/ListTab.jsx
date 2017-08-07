import React from 'react';
import {observer} from 'mobx-react';
import {List, ListItem} from "react-toolbox/lib/list";

@observer
class ListTab extends React.Component {
    render() {
        return (
            <List selectable ripple>
                <ListItem
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    leftIcon='star'
                />
                <ListItem
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                    leftIcon='keyboard_arrow_down'
                />
            </List>
        )
    }
}

export default ListTab;
