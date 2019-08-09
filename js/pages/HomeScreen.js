/**
 * <pre>
 *     author : xiaomili
 *     e-mail : 946891360@qq.com
 *     time   : 2019-08-09 9:42
 *     version: 1.0.0
 *     desc   : 首页
 * </pre>
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignInScreen = () => ({
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    登录首页
                </Text>
            </View>
        );
    },
});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    text: {},
});

export default SignInScreen;

