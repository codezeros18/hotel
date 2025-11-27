import { useState } from "react";
import { Image, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IMAGES = [
  require("../../assets/images/1.webp"),
  require("../../assets/images/2.webp"),
  require("../../assets/images/3.webp"),
];

export default function RoomGallery() {
  const [main, setMain] = useState(IMAGES[0]);

  return (
    <View>
      {/* MAIN IMAGE */}
      <Image source={main} className="w-full h-96 rounded-b-[40px]" />

      {/* BACK BUTTON */}
      <TouchableOpacity className="absolute top-14 left-6 bg-black/40 p-3 rounded-full">
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>

      {/* THUMBNAILS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="absolute bottom-4 left-0 right-0 px-4"
      >
        {IMAGES.map((img, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setMain(img)}
            className={`mr-3 p-1 rounded-xl ${
              main === img ? "border-2 border-primary" : ""
            }`}
          >
            <Image source={img} className="w-20 h-20 rounded-xl" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
