import { router } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/1.webp")}
      className="flex-1 justify-end"
      resizeMode="cover"
    >
      {/* DARK OVERLAY */}
      <View className="absolute inset-0 bg-black/45" />

      {/* BRANDING TEXT */}
      <View className="px-8 pb-32">
        <Text className="text-white text-5xl font-poppinsBold leading-tight">
          Find Your{"\n"}Perfect Stay
        </Text>

        <Text className="text-white/90 mt-4 text-lg font-poppinsRegular">
          Seamless room booking and painless hotel operations in one app.
        </Text>
      </View>

      {/* FIRST ROW — Guest & Admin */}
      <View className="flex-row items-center justify-between px-8 pb-6">
        {/* Guest */}
        <TouchableOpacity
          onPress={() => router.push("/guest/home")}
          className="px-4 py-2"
        >
          <Text className="text-white text-xl font-poppinsSemiBold">
            Guest →
          </Text>
        </TouchableOpacity>

        {/* Dots */}
        <View className="flex-row items-center gap-2">
          <View className="w-2 h-2 rounded-full bg-white/40" />
          <View className="w-2 h-2 rounded-full bg-white" />
          <View className="w-2 h-2 rounded-full bg-white/40" />
        </View>

        {/* Admin */}
        <TouchableOpacity
          onPress={() => router.push("/admin/dashboard")}
          className="bg-white px-6 py-3 rounded-full shadow-xl"
        >
          <Text className="text-black text-xl font-poppinsSemiBold">
            Admin →
          </Text>
        </TouchableOpacity>
      </View>

      {/* SECOND ROW — Login / Signup */}
      <View className="flex-row items-center justify-between px-8 pb-14">

        {/* Login */}
        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="border border-white/60 px-6 py-3 rounded-full"
        >
          <Text className="text-white text-lg font-poppinsMedium">
            Login
          </Text>
        </TouchableOpacity>

        {/* Signup */}
        <TouchableOpacity
          onPress={() => router.push("/auth/register")}
          className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md"
        >
          <Text className="text-white text-lg font-poppinsMedium">
            Sign Up
          </Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}
