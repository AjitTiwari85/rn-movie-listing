import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen
    name="(tabs)"
    options={{ headerShown: false}}
    /> // Hiding root route header for tabs layout 
    <Stack.Screen
    name="movies/[id]"
    options={{ headerShown: false}}
    />
  </Stack>
}
