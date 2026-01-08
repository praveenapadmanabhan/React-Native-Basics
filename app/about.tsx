import { router } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet,  } from "react-native";
// useState used
export default function About() {
  const [ count, setCount ] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

 
  return (
    //<View style={styles.row}> or style={{ flexDirection: "row" }} 
    <View style={styles.container}>
      <View style={styles.row}>   
         <Pressable onPress= {decrease}>
          <Text style={styles.decrease}>-</Text>
         </Pressable> 
        <Text style={styles.text}>{count}</Text>
        <Pressable onPress= {increase}>
        <Text style={styles.increase}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress= {() => router.push("/login")}>
      <Text style={styles.text}>Move to Next---</Text>
      </Pressable>
    </View>
  )};



const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
    color: "#540303ff",
    fontWeight: "bold",
    marginTop: 20
  },
  increase: {
    fontSize: 24,
    color: "green",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "green",
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  decrease: {
    fontSize: 24,
    color: "red",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 4
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  }
});