import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import Login from './pages/Login';
import Register from './pages/Register';
import TrainHome from './pages/TrainHome';
import OrdersHome from './pages/Orders';
import Activities from './pages/Activities';
import AdminHome from './pages/admin/AdminHome';
import AdminOrders from './pages/admin/AdminOrders';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';
import Activity from './pages/Activity';
import Progression from './pages/Progression';
import Menu from "./pages/Menu";
import ActivityDetails from './pages/ActivityDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <CartProvider>
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
              <Stack.Screen name="Activity" component={Activity} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="OrdersHome" component={OrdersHome} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Activities" component={Activities} />
              <Stack.Screen name="Adm_Home" component={AdminHome} />
              <Stack.Screen name="Adm_Orders" component={AdminOrders} />
              <Stack.Screen name="Logout" component={Login} />
              <Stack.Screen name="Progression" component={Progression} />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});
