import { router } from "expo-router";
import { MotiView } from "moti";
import { useState } from "react";
import { Text, View } from "react-native";
import RegisterButton from "../../components/register/RegisterButton";
import RegisterHeader from "../../components/register/RegisterHeader";
import RegisterInput from "../../components/register/RegisterInput";
import SocialButton from "../../components/register/SocialButton";

export default function Register() {
  const [secure1, setSecure1] = useState(true);

  return (
    <View className="flex-1 bg-background justify-center px-8">

      <RegisterHeader />

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 450 }}
      >
        <RegisterInput icon="person-outline" placeholder="Full Name" />

        <RegisterInput
          icon="call-outline"
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />

        <RegisterInput
          icon="mail-outline"
          placeholder="Email Address"
          keyboardType="email-address"
        />

        <RegisterInput
          icon="lock-closed-outline"
          placeholder="Password"
          secure={secure1}
          toggleSecure={() => setSecure1(!secure1)}
        />
      </MotiView>

      {/* TERMS */}
      <Text className="text-center text-text-muted text-xs mt-5 mb-4">
        By signing up, you agree to our
        <Text className="text-accent"> Terms </Text>
        &
        <Text className="text-accent"> Privacy Policy</Text>.
      </Text>

      <RegisterButton
        label="Create Account"
        onPress={() => router.push("/guest/home")}
      />

      {/* OR */}
      <Text className="text-center text-text-muted my-5 font-poppinsMedium">
        Or continue with
      </Text>

      <SocialButton
        label="Sign up with Google"
        icon={require("../../assets/images/google.png")}
      />

      {/* LOGIN REDIRECT */}
      <Text className="text-center mt-6 text-text-muted font-poppinsMedium">
        Already have an account?
        <Text
          className="text-accent font-poppinsSemiBold"
          onPress={() => router.push("/auth/login")}
        >
          {" "}Login
        </Text>
      </Text>

    </View>
  );
}
