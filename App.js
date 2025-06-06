import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // ✅ ajout ici
import { StyleSheet } from 'react-native';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import TrainHome from './pages/TrainHome';
import OrdersHome from './pages/Orders';
import Activities from './pages/Activities';
import AdminHome from './pages/admin/AdminHome';
import AdminOrders from './pages/admin/AdminOrders';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E', // adapte si nécessaire à ton thème
  },
});
