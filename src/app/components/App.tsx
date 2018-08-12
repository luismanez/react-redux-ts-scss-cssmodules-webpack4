import * as React from 'react';

import Sidebar from './Sidebar'
import Main from './Main'

import styles from '../styles/index.css'

export class App extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> { 
        return (
            <div className={styles.app}>
                <Sidebar />
                <Main />
            </div>
        );
    }
}