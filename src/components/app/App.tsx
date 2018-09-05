import * as React from 'react';

import {HeaderContainer} from '../header';
import {Slider} from "../slider";
import * as styles from './styles.css';

export interface IProps {}
export interface IState {}

/**
 * @author Balov Bohdan <balovbohdan@gmail.com>
 * @version 1.0.0
 */
export class App extends React.Component<IProps, IState> {
    render() {
        return (
            <div className={styles.main}>
                <HeaderContainer/>
                <Slider/>
            </div>
        );
    }
}