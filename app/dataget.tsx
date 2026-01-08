import {router} from "expo-router";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function UseEffect() {
    const [ refresh, setRefresh ] = useState(false);
    const [ users, setUsers ] = useState<Array<{
        id: number;
        name: string;
        email: string; 
        phone: string}>>([]);
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then( json => setUsers(json));
}, [refresh]);

return(
    <View style={styles.container}>
        <FlatList
        data={users}
        renderItem={({item}) =>
            <View style={styles.card}>
                <Text>{item.name}</Text>
                 <Text>{item.email}</Text>
                 <Text>{item.phone}</Text>
                 

            </View>
        }
            keyExtractor={(item) => item.id.toString()}
         />
         <Pressable onPress = {() => setRefresh(!refresh)}>
            <View style={styles.refresh}>
                <Ionicons name="refresh" size={22} color="#081517ff" />
                <Text style={styles.text}>Refresh</Text>
            </View>
         </Pressable>
            <Pressable onPress= {() => router.push("/")}>
            <View style={styles.item}>
              <Ionicons name="home" size={22} color="#081517ff" />
              <Text style={styles.text}>Home</Text>
              </View>
           </Pressable>

    </View>
)};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d1e7f0ff",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0e3740ff"
    },
    card: {
        backgroundColor: "#81cfe0ff",
        padding: 20,    
        marginVertical: 8,
        borderRadius: 10,
        width: 300,
        alignItems: "center",
        marginBottom: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "center",   
        marginBottom: 40,
    },
    refresh: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "center",   
        marginBottom: 10,
    },
}); 




/* 
import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function UseEffect() {
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(false);

  // ✅ Extracted fetch logic
  const fetchUsers = () => {
    console.log("Fetching users...");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setUsers(json))
      .catch(error => console.error("Error:", error));
  };

  // ✅ useEffect calls the function
  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
      />

     
      <Pressable onPress={() => setRefresh(!refresh)}>
        <View style={styles.refresh}>
          <Ionicons name="refresh" size={22} color="#081517ff" />
          <Text style={styles.text}>Refresh</Text>
        </View>
      </Pressable>

     
      <Pressable onPress={() => router.push("/")}>
        <View style={styles.item}>
          <Ionicons name="home" size={22} color="#081517ff" />
          <Text style={styles.text}>Home</Text>
        </View>
      </Pressable>
    </View>
  );
}
*/