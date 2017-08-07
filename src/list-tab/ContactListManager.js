import {observable, action, computed, extendObservable} from 'mobx';

// manage a list of contacts
// allows searching & sorting
export class ContactListManager {

    // declare state
    constructor(rawList) {
        // transform given input to list of observables
        const list = (rawList || []).map(item => new ContactItemManager(item));
        extendObservable(this, {
            list,                       // list of observables
            sortField: "name",          // field in list that is used for sorting
            queryString: ""             // current text used for search (empty string means no search)
        });
    }

    // list after search & sort
    @computed
    get listForDisplay() {
        return this.list
            .filter(item => item.match(this.queryString))
            .sort((item1, item2) => (item1[this.sortField] < item2[this.sortField]) ? -1 : ((item1[this.sortField] > item2[this.sortField]) ? 1 : 0))
    }

    // update selected tab
    @action.bound
    setTabIndex(index) {
        this.tabIndex = index;
    }
}

// manages one item in our list of contacts
export class ContactItemManager {

    // prepare fields for display
    constructor(item) {
        if (item) {
            this.key = item.id;
            this.name = item.name;
        }
    }

    // collapsed/expanded state
    @observable isCollapsed = true;

    match(queryString) {
        return !queryString || (this.name && this.name.indexOf(queryString) > -1);
    }

    @action.bound
    close() {
        this.isCollapsed = true;
    }

    @action.bound
    open() {
        this.isCollapsed = false;
    }

}
