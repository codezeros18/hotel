import { MotiText, MotiView } from "moti";
import { Image } from "react-native";

export default function LoginHeader() {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 600 }}
      className="items-center mb-12"
    >
      <Image
        source={require("../../assets/images/emblem.png")}
        className="w-28 h-28 mb-4"
        resizeMode="contain"
      />

      <MotiText className="text-4xl font-poppinsBold text-text-dark">
        Welcome Back
      </MotiText>

      <MotiText className="text-text-muted mt-1 font-poppinsMedium">
        Let's continue your journey
      </MotiText>
    </MotiView>
  );
}
