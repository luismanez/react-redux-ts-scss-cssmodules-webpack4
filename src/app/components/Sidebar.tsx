import * as React from 'react';

import styles from '../styles/index.css'

export default class Sidebar extends React.Component<{}, {}> {
    render() {
        return <aside className={styles.sidebar}>Sidebar</aside>;
    }
}