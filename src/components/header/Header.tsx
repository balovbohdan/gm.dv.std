import * as React from 'react';
import * as classnames from 'classnames';

import * as styles from './styles.css';

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class Header extends React.Component {
    render() {
        return (
            <header className={styles.main}>
                <div className={classnames(styles.part, styles.left)}>

                </div>
                <div className={classnames(styles.part, styles.center)}>
                    <h1 className={styles.title}>gm.dv.std</h1>
                </div>
                <div className={classnames(styles.part, styles.right)}>

                </div>
            </header>
        );
    }
}