import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BookingDetail() {
  const router = useRouter();

  // Data Gambar (Sama seperti Room Detail biar cantik)
  const roomImages = [
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
  ];
  const [selectedImage, setSelectedImage] = useState(roomImages[0]);

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 140 }} showsVerticalScrollIndicator={false}>
        
        {/* --- HEADER IMAGE (Gaya Room Detail) --- */}
        <View className="relative w-full h-[350px]">
          <Image 
            source={{ uri: selectedImage }} 
            className="w-full h-full rounded-b-[40px]"
            resizeMode="cover"
          />
          {/* Overlay Gelap dikit biar tulisan status terbaca */}
          <View className="absolute inset-0 bg-black/10 rounded-b-[40px]" />

          {/* Navigasi Atas */}
          <View className="absolute top-12 left-6 right-6 flex-row justify-between items-center z-10">
            <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-black/30 rounded-full items-center justify-center backdrop-blur-md">
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <View className="bg-green-500/90 px-4 py-2 rounded-full backdrop-blur-md">
                <Text className="text-white font-bold text-xs">● CONFIRMED</Text>
            </View>
          </View>
        </View>

        {/* --- KONTEN DETAIL --- */}
        <View className="px-6 pt-6">
          
          {/* Judul */}
          <View className="flex-row justify-between items-start mb-1">
            <Text className="text-2xl font-bold text-gray-900 w-[70%]">Laskar Cinta Hotel</Text>
            <View className="items-end">
                 <Text className="text-[#2F5F45] font-bold text-lg">$360</Text>
                 <Text className="text-gray-400 text-xs">Paid</Text>
            </View>
          </View>
          <Text className="text-gray-500 text-sm mb-6">📍 North Sragentina, Austria</Text>

          {/* INFO JADWAL MENGINAP (Penting buat Booking Detail) */}
          <Text className="font-bold text-gray-900 mb-3">Your Schedule</Text>
          <View className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex-row justify-between mb-6">
             <View>
                <Text className="text-gray-400 text-xs mb-1">Check-in</Text>
                <Text className="text-gray-900 font-bold text-base">24 Nov 2025</Text>
             </View>
             <View className="w-[1px] bg-gray-300" />
             <View>
                <Text className="text-gray-400 text-xs mb-1 text-right">Check-out</Text>
                <Text className="text-gray-900 font-bold text-base text-right">26 Nov 2025</Text>
             </View>
          </View>

          {/* Fasilitas */}
          <Text className="font-bold text-gray-900 mb-3">Facilities Included</Text>
          <View className="flex-row justify-between mb-6 border-b border-gray-100 pb-6">
            <View className="flex-row items-center gap-2"><Ionicons name="bed-outline" size={20} color="#666" /><Text className="text-gray-600 text-sm font-medium ml-2">2 Beds</Text></View>
            <View className="flex-row items-center gap-2"><Ionicons name="water-outline" size={20} color="#666" /><Text className="text-gray-600 text-sm font-medium ml-2">1 Bath</Text></View>
            <View className="flex-row items-center gap-2"><Ionicons name="people-outline" size={20} color="#666" /><Text className="text-gray-600 text-sm font-medium ml-2">4 Guest</Text></View>
          </View>

          {/* Deskripsi Kamar */}
          <View className="mb-8">
              <Text className="font-bold text-lg mb-2 text-gray-900">Room Description</Text>
              <Text className="text-gray-500 text-sm leading-6 text-justify">
                This is your booked room. Includes free Wi-Fi, private pool access, and breakfast for 2 people. Please show your Booking ID at the receptionist upon arrival.
              </Text>
          </View>
        </View>
      </ScrollView>

      {/* --- TOMBOL DOWNLOAD TICKET (Floating) --- */}
      <View className="absolute bottom-8 left-6 right-6">
        <View className="bg-white p-2 rounded-[25px] shadow-2xl shadow-black/20 border border-gray-100">
           <TouchableOpacity 
              onPress={() => Alert.alert("Download", "E-Ticket has been saved to your gallery!")} 
              className="w-full bg-[#2F5F45] py-4 rounded-[20px] shadow-lg items-center active:scale-95 transition flex-row justify-center gap-2"
           >
              <Ionicons name="download-outline" size={20} color="white" />
              <Text className="text-white font-bold text-lg">Download E-Ticket</Text>
           </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}