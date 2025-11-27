import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import type { ComponentProps } from "react";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

const FACILITIES: { icon: IoniconName; label: string }[] = [
  { icon: "bed-outline", label: "2 Beds" },
  { icon: "people-outline", label: "4 Guests" },
  { icon: "wifi-outline", label: "Wi-Fi" },
  { icon: "restaurant-outline", label: "Breakfast" },
];

export default function RoomFacilities() {
  return (
    <View className="flex-row flex-wrap gap-3 px-6 mt-4">
      {FACILITIES.map((f) => (
        <View
          key={f.label}
          className="bg-primary/10 border border-primary/20 px-3 py-2 rounded-full flex-row items-center"
        >
          <Ionicons name={f.icon} size={16} color="#0056D6" />
          <Text className="ml-2 text-sm font-poppinsMedium text-text-dark">
            {f.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
