import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import { NavigationProp} from '@react-navigation/native';
import { useAuth } from '../components/AuthContext';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};


const Login: React.FC<HomeScreenProps>  = ({navigation}) => {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://nyirendas.us-3.evennode.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: inputValue,
            password: password,
          }),
        }
      );
      const jsonData = await response.json();
      if ("error" in jsonData) {
        setPassword('')
        setInputValue('')
        Alert.alert("Error", "Error incorrect credentials")
      }
      if("token" in jsonData && "id" in jsonData){
          console.log("in here")
          signIn(jsonData.token);
          navigation.navigate("dashboard")
      } 
      console.log(jsonData)
    } catch (error: any) {
      // error in communication
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePassword = (key: any) => {
    setPassword(key);
  };

  return (
    <View style={styles.container}>
      <View
        style={
          isFocused == false ? styles.topViewWhenFocus : styles.topViewNotFocus
        }
      >
        <Text style={{ color: "#61677A" }}>Forgot Password?</Text>
      </View>
      <View style={styles.logoView}>
        <Image
          source={require("../assets/logo_io.png")}
          style={styles.logo}
          blurRadius={0}
        />
      </View>
      <View style={styles.formView}>
        <Text style={styles.label}>Email or Phone</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          placeholder="walcotalloyor@beats.com"
        />
        <View style={{ height: "7%", width: "100%" }}></View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={(text) => handlePassword(text)}
          onFocus={handleFocus}
          onEndEditing={handleBlur}
          placeholder=" ***********"
        />
        <View style={{ height: "8%", width: "100%" }}></View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleButtonClick}
          disabled={isLoading}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {isLoading && (
          <View style={{ marginTop: "5%", alignItems: "center" }}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
      </View>
      <View style={styles.bottomView}>
        <Text style={{ color: "silver" }}>Copyright @ 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  topViewNotFocus: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: "2%",
    marginRight: "6%",
  },
  topViewWhenFocus: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: "11%",
    marginRight: "6%",
  },
  logoView: {
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: "60%",
    width: "60%",
    resizeMode: "center",
  },
  formView: {
    height: "50%",
    alignItems: "center",
    // justifyContent: "center"
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: "5%",
    alignSelf: "flex-start",
    color: "#3C4048",
  },
  input: {
    height: "15%",
    width: "90%",
    textAlign: 'center',
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#3C4048",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
    width: "90%",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  bottomView: {
    height: "5%",
    alignItems: "center",
  },
});

export default Login;