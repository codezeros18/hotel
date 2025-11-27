import { router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import RegisterButton from "../register/RegisterButton";
import RegisterInput from "../register/RegisterInput";

export default function LoginForm() {
  const [secure, setSecure] = useState(true);

  return (
    <>
      <RegisterInput
        icon="mail-outline"
        placeholder="Email Address"
        keyboardType="email-address"
      />

      <RegisterInput
        icon="lock-closed-outline"
        placeholder="Password"
        secure={secure}
        toggleSecure={() => setSecure(!secure)}
      />

      <Text className="text-center text-text-muted text-xs mt-3 mb-6">
        By logging in, you agree to our
        <Text className="text-accent"> Terms </Text>
        &
        <Text className="text-accent"> Privacy Policy</Text>.
      </Text>

      <RegisterButton
        label="Log In"
        onPress={() => router.push("/guest/home")}
      />
    </>
  );
}
