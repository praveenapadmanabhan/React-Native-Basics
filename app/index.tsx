import { Text, View, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
 
export default function App() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/about")}>
      <Text style={styles.text}>
        Welcome to Nativewind!
      </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1b1cff"
  },
  text: {
    fontSize: 24,
    color: "#d69704ff",
    fontWeight: "bold"
  },

});
