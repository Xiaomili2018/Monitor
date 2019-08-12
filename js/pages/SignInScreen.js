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
import {View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid} from 'react-native';
import RegexApi from '../utils/RegexApi';
import CountDownButton from 'react-native-smscode-count-down';

const {width, height} = Dimensions.get('window');
export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            verificationCode: '',
            phoneValidated: false,
            smsCodeValidated: false,
            smsCodeSendStatus: false,
        };
    }

    /**
     * 返回上一页
     */
    _back() {
        ToastAndroid.showWithGravityAndOffset('返回功能待开发', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 50);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => this._back()}>
                        <Image
                            style={styles.back}
                            source={require('../static/img/fanhui_baise.png')}
                        />
                    </TouchableOpacity>
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
                            onChangeText={(text) => {
                                this.setState({
                                    phoneValidated: RegexApi.isPhone(text),
                                });
                            }}
                            contextMenuHidden={true} // 禁用粘贴
                            keyboardType={'phone-pad'}
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
                            contextMenuHidden={true} // 禁用粘贴
                            keyboardType={'phone-pad'}
                            style={styles.passwordInput}
                            placeholder={'请输入验证码'}
                            placeholderTextColor={{color: '#939399'}}/>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => this._sendCode()}>
                            <View
                                style={[styles.button, {backgroundColor: this.state.phoneValidated ? '#F08519' : '#8799AB'}]}>
                                <Text style={styles.buttonText}>{this.state.smsCodeSendStatus?"开始倒计时":'发送短信验证'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.buttonLogin}>
                            <Text style={styles.buttonLoginText}>登陆</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.agreementContainer}>
                        <Text style={{color: '#C4C4CC', fontSize: 12}}>点击以上按钮，代表同意</Text>
                        <Text style={{color: '#F08519', fontSize: 12}}
                              onPress={() => ToastAndroid.showWithGravity('火速开发中...', ToastAndroid.LONG, ToastAndroid.CENTER)}>丰景用户协议 </Text>
                    </View>
                    <View style={styles.customerService}>
                        <Text style={{color: '#C4C4CC', fontSize: 12}}>如有任何疑问，请拨打</Text>
                        <Text style={{color: '#F08519', fontSize: 12}}
                              onPress={() => ToastAndroid.showWithGravity('火速开发中...', ToastAndroid.LONG, ToastAndroid.CENTER)}>丰景客服电话400-8190-890 </Text>
                    </View>
                </View>

            </View>
        );
    }

    _sendCode() {
        if (this.state.phoneValidated) {
            ToastAndroid.showWithGravity('验证码已发送，请注意查收...', ToastAndroid.LONG, ToastAndroid.CENTER);
            this.setState({
                smsCodeSendStatus: true,
            });
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'center',
    },
    buttonLoginText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF',
    },
    agreementContainer: {
        marginTop: 11,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    customerService: {
        marginTop: 170,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

