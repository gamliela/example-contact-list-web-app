import React from 'react';
import {observer} from 'mobx-react';
import ContactList from "./ContactList";
import {Dropdown} from "react-toolbox/lib/dropdown";
import {Input} from "react-toolbox/lib/input";
import style from "./style.scss"

const ListTab = observer(props =>
    <div>
        <div className={style.fieldsContainer}>
            <div className={style.searchField}>
                <Input type='text'
                       label='Search'
                       icon='search'
                       value={props.listTabManager.queryString}
                       onChange={props.listTabManager.setQueryString}
                />
            </div>
            <div className={style.sortField}>
                <Dropdown
                    onChange={props.listTabManager.setSortField}
                    source={[
                        {value: "name", label: "Sort by Name"},
                        {value: "company", label: "Sort by Company"}
                    ]}
                    value={props.listTabManager.sortField}
                />
            </div>
        </div>
        <ContactList list={props.listTabManager.listForDisplay}/>
    </div>
);

export default ListTab;
