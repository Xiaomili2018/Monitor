/**
 * <pre>
 *     author : XML
 *     e-mail : 946891360@qq.com
 *     time   : 2019/06/10
 *     version: 1.0.0
 *     desc   :各种导航设置
 * </pre>
 */
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import WelcomeScreen from '../pages/WelcomeScreen';
import SignInScreen from '../pages/SignInScreen';
import HomeScreen from '../pages/HomeScreen';

const LoadingStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const AuthStack = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const SwitchNavigator = createSwitchNavigator({
    Loading: LoadingStack,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Loading',
});

export default createAppContainer(SwitchNavigator);



