import { router } from "expo-router";
import { Text } from "react-native";

export default function LoginFooter() {
  return (
    <Text className="text-center mt-6 text-text-muted font-poppinsMedium">
      New to Hotelio?
      <Text
        className="text-accent font-poppinsSemiBold"
        onPress={() => router.push("/auth/register")}
      >
        {" "}Sign Up
      </Text>
    </Text>
  );
}
