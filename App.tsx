import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Account from "./screen/Account";
import Home from "./screen/Home";
import Explore from "./screen/Explore";
import List from "./screen/List";
import Item from "./screen/Item";
import AccountEdit from "./screen/AccountEdit";

export default function App() {
    const Stack = createNativeStackNavigator();


  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
            <Stack.Screen name={"Explore"} component={Explore}></Stack.Screen>
            <Stack.Screen name={"AccountView"} component={Account}></Stack.Screen>
            <Stack.Screen name={"List"} component={List}></Stack.Screen>
            <Stack.Screen name={"Item"} component={Item}></Stack.Screen>
            <Stack.Screen name={"AccountPersonal"} component={AccountEdit}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
