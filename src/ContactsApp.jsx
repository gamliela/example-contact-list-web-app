import React from 'react';
import {observer} from 'mobx-react';
import {Tabs} from "react-toolbox/lib/tabs";
import {Tab} from "react-toolbox/lib/tabs";
import {ProgressBar} from "react-toolbox/lib/progress_bar";
import {Snackbar} from "react-toolbox/lib/snackbar";
import style from "./style.scss"
import ListTab from "./list-tab/ListTab";
import AdminTab from "./admin-tab/AdminTab";

@observer
class App extends React.Component {
    render() {
        const appManager = this.props.appManager;
        if (appManager.isLoading)
            return (
                <div className={style.spinnerContainer}>
                    <ProgressBar type='circular' mode='indeterminate' multicolor/>
                </div>
            );
        else if (appManager.isLoadingError)
            return <Snackbar active={true} label='Load failed - Check Internet'/>
        else
            return (
                <Tabs index={appManager.tabIndex} onChange={appManager.setTabIndex} inverse theme={style}>
                    <Tab label='List'><ListTab listTabManager={this.props.appManager.listTabManager}/></Tab>
                    <Tab label='Admin'><AdminTab adminTabManager={this.props.appManager.adminTabManager}/></Tab>
                </Tabs>
            );
    }
}

export default App;
