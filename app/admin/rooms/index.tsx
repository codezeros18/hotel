import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";

const rooms = [
  {
    id: "RM-101",
    name: "Mandarin Suite",
    type: "Deluxe",
    price: 260,
    status: "Available",
    image: require("../../../assets/images/1.webp"),
  },
  {
    id: "RM-203",
    name: "Royal Executive",
    type: "Executive",
    price: 420,
    status: "Booked",
    image: require("../../../assets/images/2.webp"),
  },
  {
    id: "RM-310",
    name: "Ocean View Room",
    type: "Standard",
    price: 180,
    status: "Maintenance",
    image: require("../../../assets/images/3.webp"),
  },
];

export default function Rooms() {
  const [search, setSearch] = useState("");

  return (
    <View className="flex-1 bg-bg-light px-5 pt-16">
      {/* PAGE HEADER */}
      <Text className="text-3xl font-poppinsBold text-text-dark">
        Rooms Management
      </Text>
      <Text className="text-text-muted font-poppinsMedium text-sm mt-1 mb-5">
        Manage available rooms, pricing and statuses
      </Text>

      {/* ACTION BUTTONS ROW */}
      <View className="flex-row justify-between mb-5">
        <TouchableOpacity
          onPress={() => router.push("/admin/rooms/add" as any)}
          className="flex-1 bg-primary py-3 rounded-2xl flex-row justify-center items-center mr-2 shadow-md"
        >
          <Ionicons name="add-circle-outline" size={22} color="white" />
          <Text className="text-white ml-2 font-poppinsMedium">Add Room</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("Filter will be added later")}
          className="w-14 bg-white items-center justify-center rounded-2xl shadow-md border border-gray-100"
        >
          <Ionicons name="options-outline" size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* SEARCH BAR */}
      <View className="bg-white flex-row items-center px-4 py-3 rounded-2xl shadow border border-gray-100 mb-5">
        <Ionicons name="search-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Search by room name or ID..."
          placeholderTextColor="#9ca3af"
          value={search}
          onChangeText={setSearch}
          className="ml-3 flex-1 text-text-dark font-poppinsMedium"
        />
      </View>

      {/* ROOMS GRID */}
      <FlatList
        data={rooms.filter((r) =>
          r.name.toLowerCase().includes(search.toLowerCase())
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RoomCard data={item} />}
      />
    </View>
  );
}

function RoomCard({ data }: any) {
  const badge =
    data.status === "Available"
      ? "text-success bg-success/10"
      : data.status === "Booked"
      ? "text-warning bg-warning/10"
      : "text-danger bg-danger/10";

  return (
    <TouchableOpacity
      onPress={() => router.push(`/admin/rooms/${data.id}` as any)}
      className="w-[48%] bg-white rounded-3xl shadow-lg p-3 mb-5 border border-gray-100"
    >
      {/* IMAGE */}
      <Image
        source={data.image}
        className="w-full h-28 rounded-2xl mb-3 bg-gray-200"
      />

      {/* NAME */}
      <Text
        className="text-lg font-poppinsSemiBold text-text-dark"
        numberOfLines={1}
      >
        {data.name}
      </Text>

      {/* TYPE */}
      <Text className="text-text-muted text-xs mb-1">{data.type}</Text>

      {/* PRICE */}
      <Text className="text-primary-dark font-poppinsBold text-base">
        ${data.price}/night
      </Text>

      {/* STATUS */}
      <Text
        className={`px-2 py-[3px] rounded-full text-[10px] font-poppinsSemiBold w-fit mt-2 ${badge}`}
      >
        {data.status}
      </Text>

      {/* ACTION */}
      <View className="flex-row justify-end mt-3">
        <TouchableOpacity
          onPress={() => router.push(`/admin/rooms/edit/${data.id}` as any)}
          className="px-2 py-1 rounded-lg bg-primary/10"
        >
          <Ionicons name="create-outline" size={14} color="#0056D6" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
