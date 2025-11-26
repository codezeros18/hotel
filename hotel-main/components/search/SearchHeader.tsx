import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchHeader() {
  return (
    <View className="px-6 flex-row items-center gap-3 mb-5">
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-10 h-10 items-center justify-center rounded-full bg-white shadow"
      >
        <Ionicons name="arrow-back" size={20} color="#1F2937" />
      </TouchableOpacity>

      <View className="flex-1 bg-white rounded-full px-5 py-3 shadow-lg border border-gray-50">
        <TextInput
          placeholder="Search your stay..."
          placeholderTextColor="#9CA3AF"
          className="text-gray-800 font-poppinsMedium"
        />
      </View>
    </View>
  );
}
