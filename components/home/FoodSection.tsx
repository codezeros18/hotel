import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

import food1 from "../../assets/images/food1.webp";
import food2 from "../../assets/images/food2.webp";

const foods = [
  {
    id: 1,
    name: "Hotel Restaurant",
    price: "IDR 150,000",
    time: "8AM–10PM",
    rating: "4.8",
    image: food1,
  },
  {
    id: 2,
    name: "Coffee & Snacks",
    price: "IDR 40,000",
    time: "9AM–9PM",
    rating: "4.5",
    image: food2,
  },
];

export default function FoodSection() {
  return (
    <View className="px-5 mb-10">
      <Text className="text-lg font-poppinsSemiBold text-navy mb-3">Food Service</Text>

      {foods.map((item) => (
        <View
          key={item.id}
          className="w-full h-52 bg-white rounded-3xl overflow-hidden mb-4 shadow relative"
        >
          <Image source={item.image} className="w-full h-full" />

          {/* Restaurant Name */}
          <Text className="absolute top-4 left-4 text-white font-poppinsSemiBold text-lg drop-shadow-lg">
            {item.name}
          </Text>

          {/* Rating */}
          <View className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full flex-row items-center">
            <Ionicons name="star" size={14} color="#FACC15" />
            <Text className="ml-1 text-gray-700 font-medium font-poppinsSemiBold">{item.rating}</Text>
          </View>

          {/* Price */}
          <Text className="absolute bottom-4 left-4 text-white text-lg font-poppinsSemiBold drop-shadow-lg">
            {item.price} <Text className="text-sm">/Person</Text>
          </Text>

          {/* Opening Time */}
          <View className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full">
            <Text className="text-gray-700 font-medium font-poppinsMedium text-sm">
              {item.time}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
