import { MotiView } from "moti";
import { View } from "react-native";
import LoginFooter from "../../components/login/LoginFooter";
import LoginForm from "../../components/login/LoginForm";
import LoginHeader from "../../components/login/LoginHeader";
import LoginSocial from "../../components/login/LoginSocial";

export default function Login() {
  return (
    <View className="flex-1 bg-white px-8 justify-center">
      <LoginHeader />

      <MotiView
        from={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 500 }}
      >
        <LoginForm />
      </MotiView>

      <LoginSocial />
      <LoginFooter />
    </View>
  );
}
