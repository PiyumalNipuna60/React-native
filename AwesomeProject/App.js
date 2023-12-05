import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {

  const[goldInputText, setGoldInputText]=useState('');

const InputHolder=(entertext)=>{
   setGoldInputText(entertext);
};

const buttonClick=()=>{
  console.log(goldInputText);
};

  return (
    <View style={styles.container}>
      <TextInput
        style={{width:'50%', paddingLeft:15, margin:10, height: 40,borderColor:'grey', borderWidth:1, borderRadius:20}}
        placeholder="enter....!"
        onChangeText={InputHolder}
      />
      <StatusBar style="auto" />
      <Button title="add"  color={"green"} onPress={buttonClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
  },

  btn:{
    width: "20%",
    backgroundColor:"red",
  },
});
