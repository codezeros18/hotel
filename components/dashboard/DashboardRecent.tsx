import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Text, View } from "react-native";

const reservations = [
  { name: "John Doe", room: "Deluxe King", status: "Paid" },
  { name: "Maria Lopez", room: "Family Room", status: "Pending" },
  { name: "Rizky M.", room: "Executive Suite", status: "Checked-in" },
];

const statusStyle = (status: string) => {
  switch (status) {
    case "Paid":
      return { bg: "bg-green-500", icon: "checkmark-circle", color: "#22c55e" };
    case "Pending":
      return { bg: "bg-yellow-500", icon: "time-outline", color: "#f59e0b" };
    default:
      return { bg: "bg-blue-500", icon: "log-in-outline", color: "#3b82f6" };
  }
};

export default function DashboardRecent() {
  return (
    <View className="mt-10">
      <Text className="text-xl font-poppinsSemiBold text-gray-800 mb-3">
        Recent Reservations
      </Text>

      <View className="space-y-4">
        {reservations.map((item, index) => {
          const s = statusStyle(item.status);

          return (
            <MotiView
              key={index}
              from={{ opacity: 0, translateX: 20 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: index * 120, duration: 300 }}
              className="bg-white p-5 rounded-2xl shadow-sm flex-row justify-between my-1 items-center"
            >
              {/* LEFT */}
              <View>
                <Text className="font-poppinsSemiBold text-gray-900 text-base">
                  {item.name}
                </Text>
                <Text className="text-gray-500 text-sm">
                  {item.room}
                </Text>
              </View>

              {/* STATUS CHIP */}
              <View
                className={`flex-row items-center px-3 py-1.5 rounded-full ${s.bg}`}
                style={{
                  shadowColor: s.color,
                  shadowOpacity: 0.25,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 3 },
                }}
              >
                <Ionicons name={s.icon as any} size={14} color="white" />
                <Text className="text-white text-xs ml-1 font-poppinsMedium">
                  {item.status}
                </Text>
              </View>
            </MotiView>
          );
        })}
      </View>
    </View>
  );
}
