import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mx-5 mb-6 shadow">
      <Ionicons name="search-outline" size={20} color="#6B7280" />
      <TextInput
        placeholder="Search room here"
        placeholderTextColor="#9CA3AF"
        className="ml-3 flex-1 font-poppins"
      />
    </View>
  );
}
