import * as react from "react";
import { View, Text} from 'react-native'
import { StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
    // Add welcome screen code here.
    return <View style={{ flex: 1}} >
        <img style={styles.center} src="./assets/little-lemon-logo.png" height={200} width={200} alt="" />
    <Text style={{
        padding: 40,
        fontSize: 30,
        color: '#000',
        textAlign: "center"
    }}>
        welcome to little lemone
    </Text>
    <Text style={{
        padding: 20,
        fontSize: 24,
        marginVertical: 8,
        color: '#000',
        textAlign: "center"
     }} >
        little lemon is a charming neighborhood bistro that serve simple food
    </Text>
    <Pressable
    onPress={() => navigation.navigate('Menu')}
    style={styles.button}
    >
        <Text style={styles.buttonText} >News Letter</Text>
    </Pressable>
  </View>
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  center: {
    display: "block",
    margin: 'auto',
    
    },
});


  export default WelcomeScreen;