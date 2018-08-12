import * as React from 'react';

import styles from '../styles/index.css'

export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <main className={styles.main}>Main Stuff</main>
        );
    }
}