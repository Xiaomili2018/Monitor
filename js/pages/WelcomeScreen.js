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
import {Text, StyleSheet, AsyncStorage, ImageBackground} from 'react-native';
import Constant from '../constant/Constant';

const DelayTime = 1000;

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downCountNum: DelayTime / 1000,
        };
    }

    //根据token检查用户是否登录，决定跳转到哪个界面
    _checkAuthentication = async () => {
        const userToken = await AsyncStorage.getItem(Constant.userToken);
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        this.props.navigation.navigate('Auth');
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this._checkAuthentication();
        }, DelayTime);

        this.downCountTimer = setInterval(() => {
            this.setState({
                downCountNum: this.downCountTimer <= 0 ? 0 : this.downCountTimer--,
            });
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.downCountTimer && clearInterval(this.downCountTimer);
    }

    render() {
        return (
            <ImageBackground
                source={require('../static/img/loading.png')}
                style={styles.background}>
                <Text
                    style={styles.text}
                    onPress={() => {
                        this._checkAuthentication();
                        this.timer && clearTimeout(this.timer);
                    }}
                >跳过({this.state.downCountNum})</Text>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'stretch',
    },
    text: {
        marginTop: 30,
        marginRight: 30,
        fontSize: 13,
        textAlign: 'right',
        color: '#F08519',
    },
});

