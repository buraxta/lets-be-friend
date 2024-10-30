import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
      <Button title="Login Screen" onPress={() => router.push("login")} />
    </View>
  );
}
