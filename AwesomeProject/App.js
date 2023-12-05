import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummy}>hy piyumal</Text>
      <Text style={{margin:16, borderWidth:2, borderColor:'red', color:'green'}}>hy piyumal</Text>
      <StatusBar style="auto" />
      <Button title="Learn More" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dummy:{
    color: "red",
    borderWidth:2
  }
});
