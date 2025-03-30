import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Importing Screens for the SGC Inc. agentSPYDER app:-> 
import GetStarted from './screens/GetStarted';
import LoginScreen from './screens/LoginScreen';
import Signup from './screens/Signup';
import HomedashboardScreen from './screens/HomedashboardScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import CCTV_admincheck from './screens/CCTV_admincheck';
import Webcam_admincheck from './screens/Webcam_admincheck';
import Digitalcam_admincheck from './screens/Digitalcam_admincheck';
import Minicam_admincheck from './screens/Minicam_admincheck';
import Doorcam_admincheck from './screens/Doorcam_admincheck';
import Cubecam_admincheck from './screens/Cubecam_admincheck';
import CCTVs from './screens/CCTVs';
import Webcams from './screens/Webcams';
import Digitalcam from './screens/Digitalcam';
import Minicams from './screens/Minicams';
import Doorcams from './screens/Doorcams';
import Cubecams from './screens/Cubecams';
import LookToPurchase from './screens/LooktoPurchase';
import AddedtoCart from './screens/AddedtoCart';
import Purchaseoptions from './screens/Purchaseoptions';
import QRcodepage from './screens/QRcodepage';
import Purchasedeclaration from './screens/Purchasedeclaration';
import Purchasesuccess from './screens/Purchasesuccess';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen // Get Started page
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
		    <Stack.Screen // Signup page
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Login page
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Home Dashboard page
          name="HomedashboardScreen"
          component={HomedashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Admin Dashboard page
          name="AdminDashboardScreen"
          component={AdminDashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV lookup page
          name="CCTVs"
          component={CCTVs}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Webcam lookup page
          name="Webcams"
          component={Webcams}
          options={{ headerShown: false }}
        />
        <Stack.Screen // 4k lookup page
          name="Digitalcam"
          component={Digitalcam}
          options={{ headerShown: false }}
        />
        <Stack.Screen //Minicam lookup page
          name="Minicams"
          component={Minicams}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Doorcams lookup page
          name="Doorcams"
          component={Doorcams}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Cubecams lookup page
          name="Cubecams"
          component={Cubecams}
          options={{ headerShown: false }}
        />
        <Stack.Screen // LooktoPurchase page
          name="LooktoPurchase"
          component={LookToPurchase}
          options={{ headerShown: false }}
        />
        <Stack.Screen // AddedtoCart page
          name="AddedtoCart"
          component={AddedtoCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV modifiable actions page
          name="CCTV_admincheck"
          component={CCTV_admincheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV modifiable actions page
          name="Webcam_admincheck"
          component={Webcam_admincheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV modifiable actions page
          name="Digitalcam_admincheck"
          component={Digitalcam_admincheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV modifiable actions page
          name="Minicam_admincheck"
          component={Minicam_admincheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV modifiable actions page
          name="Doorcam_admincheck"
          component={Doorcam_admincheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen // CCTV modifiable actions page
          name="Cubecam_admincheck"
          component={Cubecam_admincheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Purchase options page
          name="Purchaseoptions"
          component={Purchaseoptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Purchase Declaration page
          name="Purchasedeclaration"
          component={Purchasedeclaration}
          options={{ headerShown: false }}
        />
        <Stack.Screen //QRCode page
          name="QRcodepage"
          component={QRcodepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen // Purchase Sucess page
          name="Purchasesuccess"
          component={Purchasesuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;