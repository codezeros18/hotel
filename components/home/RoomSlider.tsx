import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const rooms = [
  {
    id: 1,
    title: "Executive King Suite",
    subtitle: "1 King Bed • 2 Guests",
    image: require("../../assets/images/1.webp"),
  },
  {
    id: 2,
    title: "Deluxe Ocean View",
    subtitle: "1 Queen Bed • 2 Guests",
    image: require("../../assets/images/2.webp"),
  },
  {
    id: 3,
    title: "Family Premier Room",
    subtitle: "2 Double Beds • Up to 4 Guests",
    image: require("../../assets/images/3.webp"),
  },
  {
    id: 4,
    title: "Grand Luxury Suite",
    subtitle: "King Bed • Private Lounge",
    image: require("../../assets/images/4.webp"),
  },
  {
    id: 5,
    title: "Studio Comfort Room",
    subtitle: "1 Queen Bed • Modern Workspace",
    image: require("../../assets/images/5.webp"),
  },
];


export default function RoomSlider() {
  return (
    <View className="mb-8">
      {/* SECTION TITLE */}
      <View className="flex-row justify-between items-center px-5 mb-3">
        <Text className="text-lg font-poppinsSemiBold text-navy">
          Nearby Destination
        </Text>

        <TouchableOpacity onPress={() => console.log("View All pressed!")}>
          <Text className="text-primary font-poppinsMedium">View All</Text>
        </TouchableOpacity>
      </View>

      {/* SLIDER */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pl-5"
      >
        {rooms.map((room, index) => (
          <MotiView
            key={room.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 150 }}
            className="mr-4"
          >
            <View className="w-64 h-80 rounded-3xl overflow-hidden relative shadow">
              {/* FULL IMAGE */}
              <Image source={room.image} className="w-full h-full" />

              {/* OVERLAY TITLE */}
              <View className="absolute top-4 left-4">
                <Text className="text-white text-xl font-poppinsSemiBold drop-shadow-lg w-40">
                  {room.title}
                </Text>
                <Text className="text-white text-sm font-poppins drop-shadow-lg">
                  {room.subtitle}
                </Text>
              </View>

              {/* BOOK NOW BUTTON (GLASS) */}
              <TouchableOpacity className="absolute bottom-6 left-4 bg-white/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/40">
                <Text className="text-white font-poppinsSemiBold tracking-wide">
                  Book Now
                </Text>
              </TouchableOpacity>

              {/* HEART ICON */}
              <TouchableOpacity className="absolute bottom-6 right-4 bg-white/80 p-3 rounded-full shadow">
                <Ionicons name="heart-outline" size={20} color="#003D87" />
              </TouchableOpacity>
            </View>
          </MotiView>
        ))}
      </ScrollView>
    </View>
  );
}
