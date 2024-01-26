import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { NativeModules } from "react-native";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth, AuthProvider } from "./components/AuthContext";

const Stack = createNativeStackNavigator();
const { StatusBarManager } = NativeModules;

function MainApp() {
  const { isAuthenticated } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {isAuthenticated() ? (
            <Stack.Screen name="dashboard" component={Dashboard} />
          ) : (
            <Stack.Screen name="login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarManager.HEIGHT,
    height: "100%", //Dimensions.get("window").height
    width: Dimensions.get("window").width,
    flexDirection: "column",
  },
});


export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}


