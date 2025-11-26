import { MotiText, MotiView } from "moti";
import { Image, View } from "react-native";

export default function RegisterHeader() {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 600 }}
      className="items-center mb-10"
    >
      <Image
        source={require("../../assets/images/emblem.png")}
        className="w-28 h-28 mb-5"
        resizeMode="contain"
      />

      <MotiText className="text-4xl font-poppinsBold text-text-dark text-center">
        Create Account
      </MotiText>

      <View className="w-20 h-[3px] bg-accent mt-3 rounded-full opacity-90" />
    </MotiView>
  );
}
