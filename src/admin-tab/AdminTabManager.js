import {observable, action, computed, extendObservable} from 'mobx';

// manage a list of abc letters with corresponding contacts
export class AdminTabManager {

    // declare state
    constructor(rawList) {
        extendObservable(this, {
            list: rawList
        });
    }

    // list after search & sort
    @computed
    get listForDisplay() {
        if (this.list) {
            // create 26 buckets for letters and 1 bucket for others
            const others = [];
            const letters = new Array(26).fill().map((_, idx) => ({
                letter: String.fromCharCode(65 + idx),
                items: []
            }));
            // add each item to its corresponding bucket
            this.list.map(item => {
                const letterCode = item && item.name && item.name.toUpperCase().charCodeAt(0) - 65;
                if (letters[letterCode])
                    letters[letterCode].items.push(item);
                else
                    others.push(item);
            });
            // add all names that not starting with [A..Z] to "Others" category
            letters.push({
                letter: "Others",
                items: others
            });
            return letters;
        }
    }
}
