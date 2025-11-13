import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function AdminHeader() {
  return (
    <View className="flex-row justify-between items-center mb-6">
      <View>
        <Text className="text-gray-500 font-poppinsMedium text-sm">
          Welcome back,
        </Text>
        <Text className="text-2xl font-poppinsBold text-gray-900">
          Admin
        </Text>
      </View>

      <TouchableOpacity className="bg-primary/10 p-3 rounded-full">
        <Ionicons name="notifications-outline" size={22} color="#1E40AF" />
      </TouchableOpacity>
    </View>
  );
}
