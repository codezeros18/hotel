import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function RoomHeaderInfo() {
  return (
    <View className="px-6 mt-6">
      <View className="flex-row justify-between items-start">
        <View>
          <Text className="text-3xl font-poppinsBold text-text-dark">
            Mandarin Suite
          </Text>
          <Text className="text-text-muted text-sm">Floor 8</Text>
        </View>

        <TouchableOpacity className="bg-primary/10 p-3 rounded-full">
          <Ionicons name="heart-outline" size={22} color="#0056D6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
