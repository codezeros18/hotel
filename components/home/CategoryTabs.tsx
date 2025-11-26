import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const CATEGORIES = [
  { label: "Hotels", icon: "bed-outline" },
  { label: "Transport", icon: "car-outline" },
  { label: "Food Service", icon: "restaurant-outline" },
];

export default function CategoryTabs() {
  const [active, setActive] = useState("Hotels");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="px-4 mt-8 mb-4"
    >
      {CATEGORIES.map((item) => {
        const isActive = item.label === active;
        return (
          <TouchableOpacity
            key={item.label}
            onPress={() => setActive(item.label)}
            className={`flex-row items-center px-8 py-3 mr-3 rounded-full border
              ${
                isActive
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              }`}
          >
            <Ionicons
              name={item.icon as any}
              size={20}
              color={isActive ? "white" : "#003C99"}
            />
            <Text
              className={`ml-2 text-lg font-poppinsSemiBold ${
                isActive ? "text-white" : "text-text-dark"
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
