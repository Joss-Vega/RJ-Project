import { AppRegistry } from 'react-native';
import AppNavigator from './src/app/navigation/AppNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
