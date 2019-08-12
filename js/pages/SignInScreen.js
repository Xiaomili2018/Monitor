/**
 * <pre>
 *     author : xiaomili
 *     e-mail : 946891360@qq.com
 *     time   : 2019-08-09 9:42
 *     version: 1.0.0
 *     desc   : 登录注册页
 * </pre>
 */

import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image
                        style={styles.back}
                        source={require('../static/img/fanhui_baise.png')}
                    />
                    <Text style={styles.register}>注册</Text>
                    <Text style={styles.welcome}>欢迎您来到农业资源大市场</Text>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.username}>
                        <Image
                            style={{width: 18, height: 20, marginLeft: 19, marginRight: 13}}
                            source={require('../static/img/lianxirentb.png')}
                        />
                        <TextInput
                            style={styles.usernameInput}
                            placeholder={'请输入手机号'}
                            placeholderTextColor={{color: '#939399'}}
                        />
                    </View>

                    <View style={styles.password}>
                        <Image
                            style={{width: 18, height: 20, marginLeft: 19, marginRight: 13}}
                            source={require('../static/img/yanzheng.png')}
                        />
                        <TextInput
                            style={styles.passwordInput}
                            placeholder={'请输入验证码'}
                            placeholderTextColor={{color: '#939399'}}/>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>发送验证短信</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.buttonLogin}>
                            <Text style={styles.buttonLoginText}>登陆</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    top: {
        height: 192,
        backgroundColor: '#F08519',
    },
    back: {
        width: 9,
        height: 18,
        marginLeft: 20,
        marginTop: 14,
    },
    register: {
        fontSize: 29,
        textAlign: 'left',
        color: '#FEFEFE',
        marginLeft: 39,
        marginTop: 31,
    },
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        color: '#FEFEFE',
        marginLeft: 39,
        marginTop: 12,
    },
    bottom: {
        height: 640,
        backgroundColor: '#FFF',
    },
    username: {
        marginLeft: 34,
        marginRight: 34,
        marginTop: 37,
        height: 39,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E6E6E6',
    },
    usernameInput: {
        fontSize: 14,
        color: '#313133',
    },
    password: {
        marginLeft: 34,
        marginRight: 34,
        marginTop: 9,
        alignContent: 'center',
        alignItems: 'center',
        height: 39,
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E6E6E6',
    },
    passwordInput: {
        width: 100,
        fontSize: 14,
        color: '#313133',
    },
    button: {
        borderRadius: 3,
        marginLeft: 50,
        backgroundColor: '#F08519',
        padding: 6,
        height: 27,
    },
    buttonText: {
        fontSize: 12,
        color: '#FFF',
    },
    buttonLogin: {
        height: 42,
        marginLeft: 36,
        marginRight: 36,
        marginTop: 31,
        backgroundColor: '#F08519',
        borderRadius: 3,
    },
    buttonLoginText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF',
    },
});

