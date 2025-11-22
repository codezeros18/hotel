import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const bookingsData = [
  {
    id: "BK-8829",
    hotel: "Mandarin Oriental",
    image: require("../../assets/images/1.webp"),
    date: "12 - 14 Oct 2025",
    status: "Upcoming",
    price: "$188",
    type: "upcoming",
  },
  {
    id: "BK-7721",
    hotel: "Kimpton Naranta",
    image: require("../../assets/images/2.webp"),
    date: "01 - 03 Sep 2025",
    status: "Completed",
    price: "$240",
    type: "history",
  },
  {
    id: "BK-1002",
    hotel: "Raffles Jakarta",
    image: require("../../assets/images/3.webp"),
    date: "20 Aug 2025",
    status: "Cancelled",
    price: "$210",
    type: "history",
  },
];

const getBadgeColor = {
  Upcoming: "bg-primary/15 text-primary-dark",
  Completed: "bg-success/15 text-success",
  Cancelled: "bg-danger/15 text-danger",
};

export default function Bookings() {
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");
  const filtered = bookingsData.filter((b) => b.type === tab);

  return (
    <View className="flex-1 bg-bg-light">
      {/* HEADER */}
      <View className="px-6 pt-16 pb-8 bg-white rounded-b-3xl shadow-lg">
        <Text className="text-3xl font-poppinsBold text-text-dark">Bookings</Text>
        <Text className="text-text-muted font-poppinsMedium mt-1">
          Track and manage your stays
        </Text>

        {/* TABS */}
        <View className="flex-row bg-gray-200/60 mt-6 rounded-full p-1">
          {["upcoming", "history"].map((item) => {
            const active = item === tab;
            return (
              <TouchableOpacity
                key={item}
                onPress={() => setTab(item as any)}
                className={`flex-1 items-center py-3 rounded-full ${
                  active ? "bg-primary shadow-md" : ""
                }`}
              >
                <Text
                  className={`font-poppinsSemiBold ${
                    active ? "text-white" : "text-text-muted"
                  }`}
                >
                  {item === "upcoming" ? "Upcoming" : "History"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* BOOKING LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
        ListEmptyComponent={
          <View className="mt-20 items-center">
            <Ionicons name="calendar-outline" size={62} color="#C7C7C7" />
            <Text className="text-text-muted mt-3 font-poppinsMedium">
              No bookings found
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/guest/booking-detail/${item.id}` as any)}
            className="bg-white rounded-3xl p-5 mb-4 shadow-lg"
          >
            {/* Top */}
            <View className="flex-row mb-4">
              <Image
                source={item.image}
                className="w-24 h-24 rounded-2xl bg-gray-200"
              />
              <View className="flex-1 ml-4">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-poppinsSemiBold text-text-dark">
                    {item.hotel}
                  </Text>
                  <Text
                    className={`px-2 py-[2px] rounded-full text-xs font-poppinsSemiBold ${getBadgeColor[item.status as keyof typeof getBadgeColor]}`}
                  >
                    {item.status}
                  </Text>
                </View>

                <Text className="text-xs text-text-muted mt-[3px]">
                  ID: {item.id}
                </Text>

                {/* Price pill */}
                <View className="flex-row items-center mt-3 bg-primary/10 px-2 py-[3px] rounded-full border border-primary/20 w-fit">
                  <Ionicons name="cash-outline" color="#0056D6" size={14} />
                  <Text className="ml-1 text-primary-dark font-poppinsSemiBold text-sm">
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>

            {/* Divider */}
            <View className="h-[1px] bg-gray-100 mb-4" />

            {/* Footer */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                <Text className="text-text-muted ml-2 text-sm">
                  {item.date}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Text className="text-primary-dark text-sm font-poppinsMedium mr-1">
                  Details
                </Text>
                <Ionicons name="chevron-forward" size={16} color="#0056D6" />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
