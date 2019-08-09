/**
 * <pre>
 *     author : xiaomili
 *     e-mail : 946891360@qq.com
 *     time   : 2019-08-09 9:42
 *     version: 1.0.0
 *     desc   : 欢迎页
 * </pre>
 */

import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import Constant from '../constant/Constant';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        // this._checkAuthentication();
    }

    //根据token检查用户是否登录，决定跳转到哪个界面
    _checkAuthentication = async () => {
        const userToken = await AsyncStorage.getItem(Constant.userToken);
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>
                    这是欢迎页
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    text: {},
});

