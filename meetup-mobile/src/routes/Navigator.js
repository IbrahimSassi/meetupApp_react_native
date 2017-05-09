/**
 * Created by Ibrahim on 05/05/2017.
 */
import {StackNavigator} from 'react-navigation';
import HomeNavigator from './HomeNavigator';

export default StackNavigator({
    Home: {screen: HomeNavigator}
}, {
    mode: 'modal',
});