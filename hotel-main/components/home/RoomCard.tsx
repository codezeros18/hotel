import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function RoomCard({ data }: any) {
  return (
    <View className="relative mx-4 mb-8 rounded-[32px] overflow-hidden shadow-xl bg-white">
      {/* IMAGE */}
      <Image
        source={data.image}
        className="w-full h-96"
        resizeMode="cover"
      />

      {/* Dark gradient bottom */}
      <View className="absolute inset-0 bg-gradient-to-b from-transparent to-black/35" />

      {/* TOP LEFT - title + location */}
      <View className="absolute left-5 top-5">
        <Text className="text-white font-poppinsBold text-2xl drop-shadow-lg">
          {data.name}
        </Text>

        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={14} color="white" />
          <Text className="text-white/90 ml-1 text-sm font-poppinsMedium">
            {data.detail}
          </Text>
        </View>
      </View>

      {/* TOP RIGHT - icons */}
      <View className="absolute right-5 top-5 flex-row gap-3">
        <GlassIcon icon="share-social-outline" />
        <GlassIcon icon="heart-outline" />
      </View>

      {/* BOTTOM ROW ICONS + LABEL */}
      <View className="absolute bottom-5 left-5 right-5 flex-row justify-between">
        <GlassInfo icon="cash-outline" label={data.price} />
        <GlassInfo icon="star" label={data.rating} gold />
        <GlassInfo icon="bed-outline" label={data.beds} />
        <GlassInfo icon="people-outline" label={data.guests} />
      </View>
    </View>
  );
}

function GlassIcon({ icon }: any) {
  return (
    <TouchableOpacity className="p-3 rounded-full bg-white/35 backdrop-blur-lg shadow-sm border border-white/20">
      <Ionicons name={icon} size={20} color="#ffffff" />
    </TouchableOpacity>
  );
}

function GlassInfo({ icon, label, gold }: any) {
  return (
    <View className="px-3 py-1 rounded-full bg-white/35 backdrop-blur-md flex-row items-center gap-1 border border-white/30 shadow-sm">
      <Ionicons name={icon} size={14} color={gold ? "#D4AF37" : "#ffffff"} />
      <Text className="text-white font-poppinsMedium text-xs">
        {label}
      </Text>
    </View>
  );
}
