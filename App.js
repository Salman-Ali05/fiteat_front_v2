import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import TrainHome from './pages/TrainHome';
import OrdersHome from './pages/Orders';
import Activities from './pages/Activities';
import AdminHome from './pages/admin/AdminHome';
import AdminOrders from './pages/admin/AdminOrders';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    if (Platform.OS === 'android') {
      
      NavigationBar.setBehaviorAsync('inset-swipe');
      NavigationBar.setBackgroundColorAsync('#ffffff00');
      NavigationBar.setPositionAsync('absolute');
      NavigationBar.setVisibilityAsync('hidden');
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'fade',
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TrainHome" component={TrainHome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OrdersHome" component={OrdersHome} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="Adm_Home" component={AdminHome} />
        <Stack.Screen name="Adm_Orders" component={AdminOrders} />
        <Stack.Screen name="Logout" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
