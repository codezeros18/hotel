import { ScrollView, Text, View } from "react-native";
import CategoryTabs from "../../components/home/CategoryTabs";
import Header from "../../components/home/Header";
import RoomCard from "../../components/home/RoomCard";

const ROOMS = [
  {
    id: 1,
    name: "Mandarin",
    detail: "Floor 3",
    image: require("../../assets/images/1.webp"),
    price: "$94",
    rating: "4.7",
    beds: "3 bed",
    guests: "4 Guests",
  },
  {
    id: 2,
    name: "Kimpton",
    detail: "Floor 6",
    image: require("../../assets/images/2.webp"),
    price: "$120",
    rating: "4.9",
    beds: "2 bed",
    guests: "3 Guests",
  },
  {
    id: 3,
    name: "Mandarin",
    detail: "Floor 3",
    image: require("../../assets/images/3.webp"),
    price: "$94",
    rating: "4.7",
    beds: "3 bed",
    guests: "4 Guests",
  },
  {
    id: 4,
    name: "Kimpton",
    detail: "Floor 6",
    image: require("../../assets/images/4.webp"),
    price: "$120",
    rating: "4.9",
    beds: "2 bed",
    guests: "3 Guests",
  },
  {
    id: 5,
    name: "Mandarin",
    detail: "Floor 3",
    image: require("../../assets/images/5.webp"),
    price: "$94",
    rating: "4.7",
    beds: "3 bed",
    guests: "4 Guests",
  },
  {
    id: 6,
    name: "Kimpton",
    detail: "Floor 6",
    image: require("../../assets/images/6.webp"),
    price: "$120",
    rating: "4.9",
    beds: "2 bed",
    guests: "3 Guests",
  },
];

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white">
      <Header />

      <View className="px-4 mt-4 mb-2">
        <Text className="text-4xl font-poppinsBold text-text-dark leading-tight">
          Book Your{"\n"}Perfect Stay!
        </Text>
      </View>



      <CategoryTabs />

      {ROOMS.map((item) => (
        <RoomCard key={item.id} data={item} />
      ))}

      <View className="h-10" />
    </ScrollView>
  );
}
