import { Image, Text, View } from "react-native";

const cars = [
  {
    id: 1,
    name: "Blue Bird Taxi",
    price: "IDR 50,000",
    time: "5–10 min",
    image: require("../../assets/images/car1.webp"),
  },
  {
    id: 2,
    name: "Hotel Shuttle",
    price: "FREE",
    time: "Every 30 minutes",
    image: require("../../assets/images/car2.webp"),
  },
];

export default function CarSection() {
  return (
    <View className="px-5 mb-10">
      <Text className="text-lg font-poppinsSemiBold text-navy mb-3">Transport Service</Text>

      {cars.map((item) => (
        <View
          key={item.id}
          className="w-full h-52 bg-white rounded-3xl overflow-hidden mb-4 shadow relative"
        >
          <Image source={item.image} className="w-full h-full" />

          {/* Service Name */}
          <Text className="absolute top-4 left-4 text-white font-poppinsSemiBold text-lg drop-shadow-lg">
            {item.name}
          </Text>

          {/* Price */}
          <Text className="absolute bottom-4 left-4 text-white text-lg font-poppinsSemiBold drop-shadow-lg">
            {item.price}
          </Text>

          {/* ETA / Info */}
          <View className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full">
            <Text className="text-gray-700 font-medium font-poppinsSemiBold text-sm">
              {item.time}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
