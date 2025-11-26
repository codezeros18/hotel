import { Text, View } from "react-native";
import SocialButton from "../register/SocialButton";

export default function LoginSocial() {
  return (
    <View className="mt-8">
      <Text className="text-center text-text-muted font-poppinsMedium mb-3">
        Or continue with
      </Text>

      <SocialButton
        label="Login with Google"
        icon={require("../../assets/images/google.png")}
      />
    </View>
  );
}
