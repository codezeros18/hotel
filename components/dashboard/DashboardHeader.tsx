import { Text, View } from "react-native";

export default function DashboardHeader() {
  return (
    <View className="px-5 pt-16 pb-6">
      <Text className="text-4xl font-poppinsBold text-text-dark">
        Admin Panel
      </Text>
      <Text className="text-text-muted font-poppinsMedium mt-1">
        Stay updated with today’s hotel performance
      </Text>
    </View>
  );
}
