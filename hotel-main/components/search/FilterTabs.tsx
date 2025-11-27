import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = ["All", "Popular", "Rating", "Price", "Luxury"];

export default function FilterTabs({ active, onSelect }: any) {
  return (
    <View className="mt-2 mb-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View className="flex-row items-center">
          {categories.map((cat, idx) => {
            const activeTab = cat === active;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => onSelect(cat)}
                className={`
                  px-6 rounded-full mx-[3px]
                  border
                  items-center justify-center
                  min-h-[42px]
                  ${activeTab ? "bg-primary border-primary" : "bg-white border-gray-300"}
                `}
                style={{ elevation: activeTab ? 4 : 0 }}
              >
                <Text
                  className={`
                    font-poppinsMedium text-sm
                    ${activeTab ? "text-white" : "text-text-dark"}
                  `}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
