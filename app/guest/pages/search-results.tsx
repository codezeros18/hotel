import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// --- DATA DUMMY ---
const hotels = [
  { 
    id: '1', 
    name: 'Mandarin', 
    location: 'Floor 3', 
    price: '$94', 
    rating: 4.7, 
    bed: '3 bed',
    guest: '4 Guests',
    image: require('../../../assets/images/1.webp') 
  },
  { 
    id: '2', 
    name: 'Kimpton', 
    location: 'Floor 6', 
    price: '$120', 
    rating: 4.9, 
    bed: '2 bed',
    guest: '3 Guests',
    image: require('../../../assets/images/2.webp') 
  },
  { 
    id: '3', 
    name: 'Raffles', 
    location: 'Floor 12', 
    price: '$210', 
    rating: 5.0, 
    bed: '1 bed',
    guest: '2 Guests',
    image: require('../../../assets/images/3.webp') 
  },
];

const categories = ["All", "Popular", "Trending", "Low Price", "Luxury"];

export default function SearchResults() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <View className="flex-1 bg-white">
      {/* --- HEADER SEARCH & FILTER --- */}
      <View className="pt-14 pb-4 rounded-b-[30px] bg-white z-10 shadow-sm">
        <View className="px-6 flex-row items-center gap-3 mb-4">
            {/* Tombol Back */}
            <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 items-center justify-center bg-gray-50 rounded-full">
                <Ionicons name="arrow-back" size={24} color="#1F2937" />
            </TouchableOpacity>
            
            {/* Search Bar */}
            <View className="flex-1 flex-row items-center bg-gray-50 rounded-full px-5 py-3 border border-gray-100">
                <Ionicons name="search" size={20} color="#9CA3AF" />
                <TextInput 
                    placeholder="Search your stay..." 
                    className="flex-1 ml-2 text-gray-800 font-medium"
                    placeholderTextColor="#9CA3AF"
                />
            </View>
        </View>

        {/* Categories Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 10 }}>
            {categories.map((cat, index) => (
                <TouchableOpacity 
                    key={index} 
                    onPress={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full border ${activeCategory === cat ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-200'}`}
                >
                    <Text className={`font-semibold ${activeCategory === cat ? 'text-white' : 'text-gray-500'}`}>
                        {cat}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </View>

      {/* --- LIST HOTEL --- */}
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            className="w-full h-[380px] rounded-[35px] mb-6 overflow-hidden relative shadow-sm bg-gray-200"
            activeOpacity={0.9}
            onPress={() => router.push(`/guest/pages/room-detail/${item.id}` as any)}
          >
            {/* Gambar Background Full */}
            <Image source={item.image} className="w-full h-full absolute" resizeMode="cover" />
            
            {/* Overlay Hitam Transparan */}
            <View className="absolute w-full h-full bg-black/20" />

            {/* Bagian Atas: Nama & Lokasi */}
            <View className="absolute top-5 left-5 right-5 flex-row justify-between">
                <View>
                    <Text className="text-white text-3xl font-bold shadow-sm">{item.name}</Text>
                    <Text className="text-white/90 text-base font-medium">{item.location}</Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-white/20 items-center justify-center backdrop-blur-md border border-white/20">
                    <Ionicons name="heart-outline" size={22} color="white" />
                </View>
            </View>

            {/* Bagian Bawah: Chips Info */}
            <View className="absolute bottom-5 left-5 right-5 flex-row flex-wrap gap-2">
                
                {/* --- HARGA DENGAN ICON UANG --- */}
                <View className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full flex-row items-center border border-white/10">
                    <Ionicons name="cash-outline" size={18} color="white" style={{ marginRight: 6 }} />
                    <Text className="text-white font-bold text-lg">{item.price}</Text>
                </View>
                
                {/* Rating */}
                <View className="bg-white/30 backdrop-blur-md px-3 py-2 rounded-full flex-row items-center border border-white/10">
                    <Ionicons name="star" size={14} color="#FCD34D" />
                    <Text className="text-white font-bold ml-1">{item.rating}</Text>
                </View>

                {/* Bed */}
                <View className="bg-white/30 backdrop-blur-md px-3 py-2 rounded-full flex-row items-center border border-white/10">
                    <Text className="text-white font-bold text-xs">{item.bed}</Text>
                </View>

                {/* Guest */}
                <View className="bg-white/30 backdrop-blur-md px-3 py-2 rounded-full flex-row items-center border border-white/10">
                    <Text className="text-white font-bold text-xs">{item.guest}</Text>
                </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}