import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Text, View } from "react-native";

const stats = [
  { title: "Total Hotels", value: "3", icon: "business-outline", color: "#3B82F6", progress: 80 },
  { title: "Rooms Available", value: "54", icon: "bed-outline", color: "#6366F1", progress: 65 },
  { title: "Check-ins Today", value: "18", icon: "log-in-outline", color: "#10B981", progress: 45 },
  { title: "Pending Payments", value: "5", icon: "alert-circle-outline", color: "#F59E0B", progress: 20 },
];

export default function DashboardStats() {
  return (
    <View className="grid grid-cols-2 gap-4 mt-6">
      {stats.map((item, index) => (
        <MotiView
          key={index}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 450, delay: index * 150 }}
          className="p-6 rounded-2xl shadow bg-white"
        >
          {/* ICON + TITLE */}
          <View className="flex-row items-center mb-3">
            <View
              className="p-3 rounded-xl"
              style={{ backgroundColor: item.color + "20" }}
            >
              <Ionicons name={item.icon as any} size={28} color={item.color} />
            </View>
            <Text className="ml-3 text-gray-600 font-poppinsMedium">
              {item.title}
            </Text>
          </View>

          {/* VALUE */}
          <Text className="text-4xl font-poppinsBold text-gray-900">
            {item.value}
          </Text>

          {/* PROGRESS BAR */}
          <View className="w-full h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
            <View
              className="h-full rounded-full"
              style={{ width: `${item.progress}%`, backgroundColor: item.color }}
            />
          </View>

          {/* PROGRESS TEXT */}
          <Text className="text-xs text-gray-500 mt-1">
            {item.progress}% progress
          </Text>
        </MotiView>
      ))}
    </View>
  );
}
