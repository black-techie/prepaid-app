import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { NativeModules } from "react-native";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <SafeAreaView style={styles.container}> */}
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="dashboard" component={Dashboard} />
        {/* </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarManager.HEIGHT,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flexDirection: "column",
  },
});
