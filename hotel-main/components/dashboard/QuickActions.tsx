import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { route } from "../../utils/router";

const actions = [
  { label: "Manage", icon: "settings-outline", path: "/admin/manage" },
  { label: "Scanner", icon: "qr-code-outline", path: "/admin/scanner" },
  { label: "Reservations", icon: "list-outline", path: "/admin/reservations" },
  { label: "Reports", icon: "stats-chart-outline", path: "/admin/reports" },
];

export default function QuickActions() {
  return (
    <View className="mt-2 px-5">
      <Text className="text-xl font-poppinsSemiBold text-text-dark mb-4">
        Quick Actions
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {actions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(route(item.path))}
            className="w-[47%] bg-primary py-6 rounded-3xl items-center shadow-xl mb-4"
          >
            <Ionicons name={item.icon as any} size={32} color="white" />
            <Text className="text-white mt-3 font-poppinsMedium text-lg">
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
