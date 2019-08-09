/**
 * <pre>
 *     author : XML
 *     e-mail : 946891360@qq.com
 *     time   : 2019/8/9
 *     version: 1.0.0
 *     desc   : 程序入口
 * </pre>
 */

import React, {Fragment} from 'react';
import {
    StyleSheet,
} from 'react-native';

import AuthNavigator from './js/navigator/AuthNavigator';

const App = () => {
    return (
        <Fragment>
            <AuthNavigator/>
        </Fragment>
    );
};

const styles = StyleSheet.create({});

export default App;
