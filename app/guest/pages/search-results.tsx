import { useState } from "react";
import { FlatList, View } from "react-native";
import RoomCard from "../../../components/home/RoomCard";
import FilterTabs from "../../../components/search/FilterTabs";
import SearchHeader from "../../../components/search/SearchHeader";

const hotels = [
  { id: "1", name: "Mandarin", detail: "Floor 3", price: "$94", rating: 4.7, beds: "3 bed", guests: "4 Guests", image: require("../../../assets/images/1.webp") },
  { id: "2", name: "Kimpton", detail: "Floor 6", price: "$120", rating: 4.9, beds: "2 bed", guests: "3 Guests", image: require("../../../assets/images/2.webp") },
  { id: "3", name: "Raffles", detail: "Floor 12", price: "$210", rating: 5.0, beds: "1 bed", guests: "2 Guests", image: require("../../../assets/images/3.webp") },
];

export default function SearchResults() {
  const [filter, setFilter] = useState("All");

  const filteredData = hotels.filter((item) => {
    if (filter === "Rating") return item.rating >= 4.8;
    if (filter === "Price") return parseInt(item.price.replace("$", "")) <= 120;
    if (filter === "Luxury") return parseInt(item.price.replace("$", "")) >= 200;
    return true;
  });

  return (
    <View className="flex-1 bg-white pt-14">
      <SearchHeader />
      <FilterTabs active={filter} onSelect={setFilter} />

      <FlatList
        data={filteredData}
        keyExtractor={(i) => i.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
        renderItem={({ item }) => (
          <RoomCard data={item} />
        )}
      />
    </View>
  );
}
