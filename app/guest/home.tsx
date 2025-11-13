import { ScrollView } from "react-native";
import CarSection from "../../components/home/CarSection";
import CategoryTabs from "../../components/home/CategoryTabs";
import FoodSection from "../../components/home/FoodSection";
import Header from "../../components/home/Header";
import RoomSlider from "../../components/home/RoomSlider";
import SearchBar from "../../components/home/SearchBar";

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-[#e8ecef] mt-8 mb-12">
      <Header />
      <SearchBar />
      <CategoryTabs />
      <RoomSlider />
      <CarSection />
      <FoodSection />
    </ScrollView>
  );
}
