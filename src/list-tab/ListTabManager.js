import {observable, action, computed, extendObservable} from 'mobx';

// manage a list of contacts with
// allows searching & sorting
export class ListTabManager {

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

    // update sort field
    @action.bound
    setSortField(field) {
        this.sortField = field;
    }

    // update search string
    @action.bound
    setQueryString(s) {
        this.queryString = s;
    }
}

// manages one item in our list of contacts
export class ContactItemManager {

    // prepare fields for display
    constructor(item) {
        if (item) {
            this.key = item.id;
            this.name = item.name;
            this.company = item.company && item.company.name;
            this.url = item.website && `http://${item.website}`;
            this.phone = item.phone;
            this.email = item.email;
            this.addressLine = item.address && ContactItemManager.generateAddressLine(item.address);
        }
    }

    // collapsed/expanded state
    @observable isCollapsed = true;

    static generateAddressLine({street, suite, city, zipcode}) {
        return [street, suite, city, zipcode].filter(Boolean).join(", ")
    }

    // insensitive case match predicate
    match(queryString) {
        if (!queryString)
            return true;
        queryString = queryString.toLowerCase();
        return (this.name && this.name.toLowerCase().indexOf(queryString) > -1) ||
            (this.company && this.company.toLowerCase().indexOf(queryString) > -1);
    }

    @action.bound
    toggle() {
        this.isCollapsed = !this.isCollapsed;
    }

}
