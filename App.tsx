import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { NativeModules } from 'react-native';
import Login from './pages/login';
import colors from './components/colorPalette';


const palette = colors();
const { StatusBarManager } = NativeModules;

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <Login />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container: {
    paddingTop: StatusBarManager.HEIGHT,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: palette.primary,
    flexDirection: "column"
  }
});

