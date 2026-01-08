import {FlatList, View, Text, StyleSheet, Pressable} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function Flatlist() {
    const router = useRouter();
    const DATA=[
        {id: '1', title: 'First Name', src: ''},
        {id: '2', title: 'Last Name'},
        {id: '3', title: 'Age'},
        {id: '4', title: 'Email'},
        {id: '5', title: 'Phone Number'},
    ];
    
    return(
        <View style={ styles.container}>
           <FlatList
           data={DATA}
           renderItem={({item}) => (
            <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
           )}
           keyExtractor={(item) => item.id}
           />
           <Pressable onPress= {() => router.push("/dataget")}>
            <View style={styles.item}>
              <Ionicons name="arrow-forward" size={22} color="#081517ff" />
              <Text style={styles.text}>Next</Text>
              </View>
           </Pressable>
        </View>
   )};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 16,
        backgroundColor: "#a1b7d9a6",
    },
    card: {
        flex: 1,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#0e8466ff",
        borderRadius: 20,
        marginVertical: 8,
        backgroundColor: "#0ba797ff",

    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    text: {
        fontSize: 18,
        marginTop: 4,
        color: "#081517ff",
        fontWeight: "bold",
        

    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "center",   
        marginBottom: 70,
    },
});