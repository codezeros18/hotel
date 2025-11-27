import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";

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

export default function EditRoom() {
  const { id } = useLocalSearchParams(); // contoh ID dari route
  const [loading, setLoading] = useState(true);

  /* === FORM STATES === */
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("Standard");
  const [price, setPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [guests, setGuests] = useState("");
  const [image, setImage] = useState(null as any);
  const [amenities, setAmenities] = useState<string[]>([]);

  /* === SIMULATION FETCH DATA === */
  useEffect(() => {
    setTimeout(() => {
      // seharusnya fetch dari backend
      setRoomName("Mandarin Suite");
      setRoomType("Deluxe");
      setPrice("180");
      setBeds("2");
      setGuests("4");
      setImage("https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&w=1200");
      setAmenities(["WiFi", "Smart TV", "Breakfast"]);
      setLoading(false);
    }, 500);
  }, []);

  const toggleAmenity = (label: string) => {
    setAmenities((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const updateRoom = () => {
    Alert.alert("Success", "Room updated successfully!");
    router.back();
  };

  const deleteRoom = () => {
    Alert.alert("Delete Room?", "This action cannot be undone!", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          Alert.alert("Deleted", "Room has been removed.");
          router.back();
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="font-poppinsMedium text-text-muted">Loading room...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-bg-light px-6 pt-16"
      contentContainerStyle={{ paddingBottom: 180 }}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white shadow items-center justify-center"
        >
          <Ionicons name="chevron-back" size={22} color="#1E293B" />
        </TouchableOpacity>

        <Text className="text-2xl font-poppinsBold text-text-dark">
          Edit Room
        </Text>

        <View className="w-10" />
      </View>

      {/* ROOM IMAGE */}
      <TouchableOpacity
        onPress={() => alert("Integrate image picker")}
        className="w-full h-48 rounded-3xl bg-white shadow border border-gray-100 mb-6 items-center justify-center"
      >
        {image ? (
          <Image source={{ uri: image }} className="w-full h-full rounded-3xl" />
        ) : (
          <Ionicons name="image-outline" size={40} color="#94A3B8" />
        )}
      </TouchableOpacity>

      {/* INPUTS */}
      <Input label="Room Name" value={roomName} setValue={setRoomName} />
      <Input label="Price per Night ($)" value={price} setValue={setPrice} keyboard="numeric" />
      <Input label="Beds" value={beds} setValue={setBeds} keyboard="numeric" />
      <Input label="Max Guests" value={guests} setValue={setGuests} keyboard="numeric" />

      {/* ROOM TYPE SELECT */}
      <Text className="text-text-dark font-poppinsMedium mt-4 mb-2">Room Type</Text>
      <View className="flex-row flex-wrap gap-2">
        {roomTypes.map((type) => {
          const active = roomType === type;
          return (
            <TouchableOpacity
              key={type}
              onPress={() => setRoomType(type)}
              className={`px-4 py-2 rounded-full border shadow-sm ${
                active ? "bg-primary border-primary" : "bg-white"
              }`}
            >
              <Text className={`font-poppinsMedium ${active ? "text-white" : "text-text-muted"}`}>
                {type}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* AMENITIES */}
      <Text className="text-text-dark font-poppinsBold mt-8 mb-3">Amenities</Text>
      <View className="flex-row flex-wrap gap-3 mb-10">
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
              <Text className={`${active ? "text-white" : "text-text-muted"} font-poppinsMedium`}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ACTION BUTTONS */}
      <TouchableOpacity
        onPress={updateRoom}
        className="bg-primary py-4 rounded-2xl items-center shadow-xl mb-4"
      >
        <Text className="text-white text-lg font-poppinsBold">Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={deleteRoom}
        className="py-4 rounded-2xl border border-danger bg-danger/10 items-center"
      >
        <Text className="text-danger font-poppinsBold text-lg">Delete Room</Text>
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
