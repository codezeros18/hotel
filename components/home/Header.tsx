import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center px-4 mt-14 mb-6">
      
      {/* Profile + Greeting */}
      <View className="flex-row items-center gap-3">
        <Image
          source={require("../../assets/images/profile1.jpg")}
          className="w-14 h-14 rounded-full border-2 border-white shadow-md"
        />
        <Text className="text-lg font-poppinsSemiBold text-text-dark">
          Hello, Guest 👋
        </Text>
      </View>

      {/* Search + Notification */}
      <View className="flex-row gap-3">
        <GlassCircle icon="search" />
        <GlassCircle icon="notifications-outline" />
      </View>

    </View>
  );
}

function GlassCircle({ icon }: any) {
  return (
    <TouchableOpacity className="p-4 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow">
      <Ionicons name={icon} size={22} color="#1A1F25" />
    </TouchableOpacity>
  );
}
