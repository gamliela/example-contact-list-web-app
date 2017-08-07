import {observable, action, computed} from 'mobx';
import {fromPromise} from "mobx-utils/lib/from-promise";
import {fetchJson} from "./util";
import {PENDING} from "mobx-utils";

const JSON_URL = "http://jsonplaceholder.typicode.com/users";

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

    // current selected tab
    @observable tabIndex = 0;

    // update selected tab
    @action.bound
    setTabIndex(index) {
        this.tabIndex = index;
    }
}
