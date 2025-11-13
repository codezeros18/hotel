import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center mb-6 px-5 pt-10">
      <View>
        <Text className="text-[22px] font-poppinsSemiBold text-navy">
        Find Your
        </Text>

        <Text className="text-[22px] font-poppinsSemiBold text-navy">
        Favorite Room
        </Text>
      </View>

      <TouchableOpacity className="p-3 bg-white rounded-full shadow">
        <Ionicons name="notifications-outline" size={22} color="#003D87" />
      </TouchableOpacity>
    </View>
  );
}
