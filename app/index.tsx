import { router } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/1.webp")}
      className="flex-1"
      resizeMode="cover"
    >
      {/* GLASS OVERLAY */}
      <View className="absolute inset-0 bg-black/50" />

      {/* Branding Section */}
      <View className="flex-1 justify-end px-8 pb-40">
        <Text
          className="text-white text-[46px] font-poppinsBold leading-tight"
          style={{ textShadowColor: "#000", textShadowRadius: 8 }}
        >
          Find Your
          {"\n"}
          Perfect Stay
        </Text>

        <Text
          className="text-white/90 mt-3 text-lg font-poppinsMedium max-w-[85%]"
          style={{ textShadowColor: "#000", textShadowRadius: 8 }}
        >
          Premium room booking & effortless hotel operations in one experience.
        </Text>
      </View>

      {/* CTA Primary Buttons */}
      <View className="px-8 pb-10">
        {/* Guest */}
        <TouchableOpacity
          onPress={() => router.push("/guest/home")}
          className="bg-primary py-4 rounded-2xl items-center mb-3 shadow-xl"
        >
          <Text className="text-white font-poppinsSemiBold text-lg">
            Continue as Guest
          </Text>
        </TouchableOpacity>

        {/* Admin */}
        <TouchableOpacity
          onPress={() => router.push("/admin/dashboard")}
          className="bg-white/15 py-4 rounded-2xl items-center backdrop-blur-md border border-white/40 shadow-lg"
        >
          <Text className="text-white font-poppinsSemiBold text-lg">
            Admin Panel
          </Text>
        </TouchableOpacity>
      </View>

      {/* Secondary Actions */}
      <View className="flex-row justify-center gap-10 pb-8">
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text className="text-white/90 font-poppinsMedium text-base">
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text className="text-white/90 font-poppinsMedium text-base">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
