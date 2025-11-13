import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = [
  { id: 1, label: "Room", icon: "bed-outline", active: true },
  { id: 2, label: "Food", icon: "restaurant-outline" },
  { id: 3, label: "Car", icon: "car-outline" },
];

export default function CategoryTabs() {
  return (
    <View className="items-center mb-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
      >
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            className={`flex items-center mx-2 px-6 py-3 rounded-2xl ${
              item.active ? "bg-primary" : "bg-white"
            }`}
            disabled={!item.active}
          >
            <Ionicons
              name={item.icon as any}
              size={22}
              color={item.active ? "white" : "#6B7280"}
            />
            <Text
              className={`mt-1 text-sm font-poppinsMedium ${
                item.active ? "text-white" : "text-grayText"
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
