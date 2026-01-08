import { Stack } from "expo-router";


export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="splashscreen" options={{ title: "Splash Screen" , headerShown:false}}/>
      <Stack.Screen name="index" options={{title: "Home" , headerShown:false}}/>
      <Stack.Screen name="about" options={{ title: "About" , headerShown:true}}/>
      <Stack.Screen name="flatlist" options={{ title: "FlatList" , headerShown:false}}/>
      <Stack.Screen name="useEffect" options={{ title: "UseEffect" , headerShown:true}}/>
      <Stack.Screen name="login" options={{ title: "Login" , headerShown:false}}/>
    </Stack>
  );
}
