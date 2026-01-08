import { router } from "expo-router";
import { useState } from "react";
 import { View, TextInput, Pressable, StyleSheet, Text, ImageBackground } from "react-native";
  export default function Login() { 
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const handleLogin = () => { 
        if (email === "admin@example.com" && password === "password") {
                router.replace("/flatlist");                
             } 
        else { alert("Invalid credentials");

         };
        }
    
return (
    <ImageBackground
    source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg", }}
    style={styles.backgroundImage}
  >
     <View style = {styles.container}>
                     <TextInput style={styles.input}
                      placeholder="Email" 
                      value={email} 
                      onChangeText={setEmail} /> 

                      <TextInput style={styles.input} 
                      placeholder="Password" 
                      value={password} 
                      secureTextEntry 
                      onChangeText={setPassword} /> 

                      <Pressable onPress={handleLogin} style={styles.button}>
                         <Text style={styles.buttonText}>Login</Text> 
                         </Pressable> 
                         </View> 
                            </ImageBackground>
);
  }

const styles = StyleSheet.create({
     container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", // no need background color here.it will kill the background image
        borderColor: "#ccc",     
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
     input: { 
        width: "80%", 
        height: 40, 
        borderColor: "#ccc", 
        borderWidth: 1, 
        borderRadius: 5, 
        marginBottom: 15, 
        paddingHorizontal: 10, 
        backgroundColor: "#fff", 
    }, 
    button: { 
        width: "80%", 
        height: 40, 
        backgroundColor: "#007bff", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 5, 
    }, 
    buttonText: { 
        color: "#fff", 
        fontWeight: "bold", 
    },
 });
