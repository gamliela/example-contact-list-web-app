import React from 'react';
import {observer} from 'mobx-react';
import {Tabs} from "react-toolbox/lib/tabs";
import {Tab} from "react-toolbox/lib/tabs";
import {ProgressBar} from "react-toolbox/lib/progress_bar";
import style from "./style.scss"
import ListTab from "./list-tab/ListTab";

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
        else
            return (
                <Tabs index={appManager.tabIndex} onChange={appManager.setTabIndex} inverse theme={style}>
                    <Tab label='List'><ListTab></ListTab></Tab>
                    <Tab label='Admin'>Admin</Tab>
                </Tabs>
            );
    }
}

export default App;
