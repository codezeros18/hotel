import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const stats = [
  { title: "Rooms Available", value: "54", icon: "bed-outline" },
  { title: "Check-ins Today", value: "18", icon: "log-in-outline" },
  { title: "Pending Payments", value: "5", icon: "alert-circle-outline" },
  { title: "Total Earnings", value: "$21K", icon: "cash-outline" },
];

export default function AdminStatsGrid() {
  return (
    <View className="mt-4 flex-row flex-wrap justify-between px-5">
      {stats.map((item, index) => (
        <View
          key={index}
          className="w-[47%] bg-white rounded-3xl p-6 mb-5 shadow-lg"
        >
          <View className="bg-primary/10 w-14 h-14 items-center justify-center rounded-2xl">
            <Ionicons name={item.icon as any} size={30} color="#0056D6" />
          </View>

          <Text className="text-lg mt-3 font-poppinsMedium text-text-dark">
            {item.title}
          </Text>

          <Text className="text-3xl mt-1 font-poppinsBold text-primary-dark">
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
}
