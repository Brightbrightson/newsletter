import * as React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { StyleSheet, Pressable } from "react-native";
import { useState } from 'react';


const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');

  // Add subscribe screen code here
  return <View>
            <img style={styles.center} src="./assets/little-lemon-logo-grey.png" height={200} width={200} alt="" />
<Text style={{
        padding: 20,
        fontSize: 24,
        marginVertical: 8,
        color: '#000',
        textAlign: "center"}}
        >subscribe to our newsletter for our latest delicious recipes</Text>

<TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
      />
      <Pressable style={styles.button} onPress={() => alert('Thanks for subscribing. stay tuned')}>
   <Text style={styles.buttonText}>subscribe</Text>
</Pressable>
  </View>;
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

export default SubscribeScreen;
