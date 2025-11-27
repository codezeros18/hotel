import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function RoomPriceFooter({ dates }: any) {
  return (
    <View className="bg-white border-t border-gray-100 px-6 py-5 shadow-xl">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-poppinsBold text-2xl text-text-dark">$180</Text>
        <Text className="text-text-muted text-sm">per night</Text>
      </View>

      <TouchableOpacity
        disabled={!dates.checkIn}
        onPress={() => router.push("/guest/pages/confirm-booking")}
        className={`py-4 rounded-2xl items-center ${
          dates.checkIn
            ? "bg-primary shadow-lg"
            : "bg-gray-300"
        }`}
      >
        <Text className="text-white font-poppinsBold text-lg">Book Room Now</Text>
      </TouchableOpacity>
    </View>
  );
}
