import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BookingDetail() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" />
      
      {/* --- HEADER HIJAU (Status Sukses) --- */}
      <View className="bg-[#2F5F45] pb-24 pt-12 px-6 rounded-b-[40px] shadow-lg">
        {/* Navigasi Atas */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity 
            onPress={() => router.back()} 
            className="w-10 h-10 bg-white/20 rounded-full items-center justify-center"
          >
             <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold">E-Ticket</Text>
          <View className="w-10" /> {/* Spacer biar teks tengah */}
        </View>
        
        {/* Icon & Teks Sukses */}
        <View className="items-center">
            <View className="bg-white/20 p-3 rounded-full mb-3">
                <Ionicons name="checkmark-circle" size={48} color="white" />
            </View>
            <Text className="text-white text-2xl font-bold">Booking Confirmed!</Text>
            <Text className="text-white/80 text-sm mt-1">Thank you for your order</Text>
        </View>
      </View>

      {/* --- KONTEN TIKET (CARD) --- */}
      <ScrollView className="flex-1 px-6 -mt-14" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        
        {/* Kartu Putih Utama */}
        <View className="bg-white rounded-[25px] p-6 shadow-xl shadow-black/10 mb-6">
            
            {/* Info Hotel */}
            <View className="flex-row gap-4 mb-6 border-b border-gray-100 pb-6">
                <Image 
                    source={{ uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=200" }} 
                    className="w-20 h-20 rounded-xl"
                    resizeMode="cover"
                />
                <View className="flex-1 justify-center">
                    <Text className="text-lg font-bold text-gray-900">Laskar Cinta Hotel</Text>
                    <Text className="text-gray-500 text-sm mt-1">📍 North Sragentina, Austria</Text>
                    <View className="flex-row gap-1 mt-2 items-center">
                        <Ionicons name="star" size={14} color="#F59E0B" />
                        <Text className="text-xs font-bold text-gray-700">4.8 (2.3k reviews)</Text>
                    </View>
                </View>
            </View>

            {/* Detail Tanggal (Check-in/out) */}
            <View className="flex-row justify-between mb-6 bg-gray-50 p-4 rounded-xl">
                <View>
                    <Text className="text-gray-400 text-xs mb-1">Check-in</Text>
                    <Text className="text-gray-900 font-bold text-base">24 Nov 2025</Text>
                    <Text className="text-gray-500 text-xs">After 02:00 PM</Text>
                </View>
                <View className="w-[1px] bg-gray-200 mx-2" />
                <View>
                    <Text className="text-gray-400 text-xs mb-1 text-right">Check-out</Text>
                    <Text className="text-gray-900 font-bold text-base text-right">26 Nov 2025</Text>
                    <Text className="text-gray-500 text-xs text-right">Before 12:00 PM</Text>
                </View>
            </View>

            {/* Kode Booking & QR Code Dummy */}
            <View className="items-center mb-6">
                <Text className="text-gray-400 text-xs mb-2 uppercase tracking-wider">Booking ID</Text>
                <Text className="text-[#2F5F45] text-2xl font-black mb-4 tracking-widest">HTL-88293</Text>
                
                {/* Simulasi QR Code pakai Icon */}
                <View className="border-2 border-dashed border-gray-300 p-2 rounded-lg">
                    <Ionicons name="qr-code-outline" size={100} color="black" />
                </View>
                <Text className="text-gray-400 text-[10px] mt-2">Scan this QR at the receptionist</Text>
            </View>

            {/* Rincian Tamu & Harga */}
            <View className="gap-3">
                <View className="flex-row justify-between border-b border-gray-50 pb-2">
                    <Text className="text-gray-500">Guest Name</Text>
                    <Text className="font-bold text-gray-900">Gord (You)</Text>
                </View>
                <View className="flex-row justify-between border-b border-gray-50 pb-2">
                    <Text className="text-gray-500">Room Type</Text>
                    <Text className="font-bold text-gray-900">King Suite</Text>
                </View>
                <View className="flex-row justify-between pt-2">
                    <Text className="font-bold text-lg text-gray-900">Total Paid</Text>
                    <Text className="font-bold text-xl text-[#2F5F45]">$360</Text>
                </View>
            </View>

        </View>

        {/* Tombol Back to Home */}
        <TouchableOpacity 
            // Ganti link ini ke '/guest/pages/home' jika file home kamu ada di sana
            onPress={() => router.push('/guest/pages/home' as any)} 
            className="w-full bg-[#2F5F45] py-4 rounded-[20px] shadow-lg items-center active:scale-95 transition"
        >
            <Text className="text-white font-bold text-lg">Back to Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
            onPress={() => alert("Tiket berhasil didownload!")}
            className="mt-4 w-full bg-white border border-gray-200 py-4 rounded-[20px] items-center active:bg-gray-50"
        >
            <Text className="text-gray-600 font-bold text-lg">Download PDF</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}