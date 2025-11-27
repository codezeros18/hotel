import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";

const roomTypes = ["Standard", "Deluxe", "Executive", "Suite"];
const amenitiesList = [
  { icon: "wifi-outline", label: "WiFi" },
  { icon: "bed-outline", label: "King Bed" },
  { icon: "tv-outline", label: "Smart TV" },
  { icon: "snow-outline", label: "AC" },
  { icon: "fast-food-outline", label: "Breakfast" },
  { icon: "car-outline", label: "Parking" },
  { icon: "water-outline", label: "Pool" },
];

export default function AddRoom() {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("Standard");
  const [price, setPrice] = useState("");
  const [guests, setGuests] = useState("");
  const [beds, setBeds] = useState("");
  const [image, setImage] = useState(null as any);
  const [amenities, setAmenities] = useState<string[]>([]);

  const toggleAmenity = (label: string) => {
    setAmenities((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const createRoom = () => {
    if (!roomName || !price) return alert("Please fill required fields!");

    alert("Room Created Successfully!");
    router.back();
  };

  return (
    <ScrollView
      className="flex-1 bg-bg-light px-6 pt-16"
      contentContainerStyle={{ paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full items-center justify-center bg-white shadow"
        >
          <Ionicons name="chevron-back" size={22} color="#1E293B" />
        </TouchableOpacity>

        <Text className="text-2xl font-poppinsBold text-text-dark">
          Add New Room
        </Text>

        <View className="w-10" />
      </View>

      {/* ROOM IMAGE */}
      <TouchableOpacity
        onPress={() => alert("Integrate Image Picker here")}
        className="w-full h-48 bg-white rounded-3xl shadow items-center justify-center border border-gray-100 mb-6"
      >
        {image ? (
          <Image source={{ uri: image }} className="w-full h-full rounded-3xl" />
        ) : (
          <View className="items-center">
            <Ionicons name="image-outline" size={40} color="#64748B" />
            <Text className="text-text-muted mt-2 font-poppinsMedium">
              Upload Room Image
            </Text>
          </View>
        )}
      </TouchableOpacity>

      {/* ROOM NAME */}
      <Input label="Room Name" value={roomName} setValue={setRoomName} />

      {/* ROOM TYPE SELECT */}
      <Text className="text-text-dark font-poppinsMedium mb-2">Room Type</Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        {roomTypes.map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setRoomType(type)}
            className={`px-4 py-2 rounded-full border shadow-sm ${
              type === roomType ? "bg-primary border-primary" : "bg-white"
            }`}
          >
            <Text
              className={`font-poppinsMedium ${
                type === roomType ? "text-white" : "text-text-muted"
              }`}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PRICE & DETAILS */}
      <Input
        label="Price per Night ($)"
        value={price}
        setValue={setPrice}
        keyboard="numeric"
      />
      <Input label="Beds" value={beds} setValue={setBeds} keyboard="numeric" />
      <Input
        label="Max Guests"
        value={guests}
        setValue={setGuests}
        keyboard="numeric"
      />

      {/* AMENITIES */}
      <Text className="text-text-dark font-poppinsMedium mt-6 mb-4">
        Amenities
      </Text>
      <View className="flex-row flex-wrap gap-3 mb-8">
        {amenitiesList.map((item) => {
          const active = amenities.includes(item.label);
          return (
            <TouchableOpacity
              key={item.label}
              onPress={() => toggleAmenity(item.label)}
              className={`px-4 py-3 rounded-2xl flex-row items-center gap-2 border shadow-sm ${
                active ? "bg-primary border-primary" : "bg-white"
              }`}
            >
              <Ionicons
                name={item.icon as any}
                size={18}
                color={active ? "white" : "#64748B"}
              />
              <Text
                className={`font-poppinsMedium ${
                  active ? "text-white" : "text-text-muted"
                }`}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* SAVE BUTTON */}
      <TouchableOpacity
        onPress={createRoom}
        className="bg-primary rounded-3xl py-4 items-center shadow-xl"
      >
        <Text className="text-white font-poppinsBold text-lg">Save Room</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Input({ label, value, setValue, keyboard }: any) {
  return (
    <View className="mb-5">
      <Text className="text-text-dark font-poppinsMedium mb-2">{label}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        keyboardType={keyboard}
        className="bg-white px-4 py-4 rounded-2xl shadow border border-gray-100 font-poppinsMedium text-text-dark"
      />
    </View>
  );
}
