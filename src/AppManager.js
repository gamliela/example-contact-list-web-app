import {observable, action, computed} from 'mobx';
import {fromPromise} from "mobx-utils/lib/from-promise";
import {fetchJson} from "./util";
import {PENDING, REJECTED} from "mobx-utils";
import {ListTabManager} from "./list-tab/ListTabManager";
import {AdminTabManager} from "./admin-tab/AdminTabManager";

const JSON_URL = "https://jsonplaceholder.typicode.com/users";

export default class AppManager {

    // fetch list data on creation
    constructor() {
        this.promise = fromPromise(fetchJson(JSON_URL));
    }

    // are we currently loading the list?
    @computed
    get isLoading() {
        return this.promise.state === PENDING;
    }

    // did we have error in load?
    @computed
    get isLoadingError() {
        return this.promise.state === REJECTED;
    }

    // returns ListTabManager instance
    @computed
    get listTabManager() {
        return this.promise.value && new ListTabManager(this.promise.value)
    }

    // returns AdminTabManager instance
    @computed
    get adminTabManager() {
        return this.promise.value && new AdminTabManager(this.promise.value)
    }

    // current selected tab
    @observable tabIndex = 0;

    // update selected tab
    @action.bound
    setTabIndex(index) {
        this.tabIndex = index;
    }
}
