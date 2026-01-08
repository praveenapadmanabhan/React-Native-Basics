import { useEffect } from "react";
import { router } from "expo-router";
import { View, ImageBackground, StyleSheet, Text } from "react-native";



export default function SplashScreen() {

useEffect (() => {
    console.log("Splash Screen Loaded");
 const timer = setTimeout(() => {
    router.replace("/");
}, 3000);

// cleanup
return() => {
    clearTimeout(timer);
            }; 
},[]);

return(
    <View style={styles.container}>
        <ImageBackground
        source={require("../assets/images/screen.jpg")}
        style={styles.image}
        resizeMode="contain"
        />
        <Text style={styles.text}>Welcome to My App</Text>
    </View>
    );
}
const styles=StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",

    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333333",
    },  

});