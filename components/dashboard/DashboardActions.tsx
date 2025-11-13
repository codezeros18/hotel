import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { MotiView } from "moti";
import { Pressable, Text, View } from "react-native";
import { route } from "../../utils/router";

const actions = [
  { title: "Manage Hotels", icon: "business-outline", path: "/admin/manage-hotels", color: "#3B82F6" },
  { title: "Manage Rooms", icon: "bed-outline", path: "/admin/manage-rooms", color: "#6366F1" },
  { title: "Reservations", icon: "list-outline", path: "/admin/reservations", color: "#10B981" },
  { title: "Scanner", icon: "qr-code-outline", path: "/admin/scanner", color: "#F59E0B" },
];

export default function DashboardActions() {
  return (
    <View className="mt-10">
      <Text className="text-xl font-poppinsSemiBold text-gray-800 mb-4">Quick Actions</Text>

      <View className="grid grid-cols-2 gap-4">
        {actions.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(route(item.path))}
          >
            {/* CARD ANIMATION */}
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: index * 120, duration: 350 }}
              className="rounded-3xl p-6 bg-white"
              style={{
                shadowColor: item.color,
                shadowOpacity: 0.15,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 4 },
              }}
            >
              {/* ICON BUBBLE */}
              <MotiView
                from={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "timing", duration: 300 }}
                className="p-4 rounded-2xl mb-3"
                style={{ backgroundColor: item.color + "20" }}
              >
                <Ionicons name={item.icon as any} size={32} color={item.color} />
              </MotiView>

              {/* TEXT */}
              <Text className="font-poppinsSemiBold text-gray-900 text-center text-base">
                {item.title}
              </Text>
            </MotiView>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
