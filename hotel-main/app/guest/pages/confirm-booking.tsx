import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmBooking() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#2F5F45] items-center justify-center px-6">
      <StatusBar barStyle="light-content" />
      
      {/* Icon Sukses Besar */}
      <View className="bg-white/20 p-8 rounded-full mb-6 animate-bounce">
        <Ionicons name="checkmark-outline" size={80} color="white" />
      </View>

      <Text className="text-white text-3xl font-bold mb-2 text-center">Payment Success!</Text>
      <Text className="text-white/80 text-center mb-12 text-base">
        Your booking has been confirmed.{"\n"}We have sent the receipt to your email.
      </Text>

      {/* Tombol Lihat Tiket */}
      <TouchableOpacity 
        // Arahkan ke halaman Booking Detail (Tiket)
        onPress={() => router.push('/guest/pages/booking-detail/123' as any)}
        className="w-full bg-white py-4 rounded-[20px] items-center mb-4 shadow-lg"
      >
        <Text className="text-[#2F5F45] font-bold text-lg">View E-Ticket</Text>
      </TouchableOpacity>

      {/* Tombol Kembali ke Home */}
      <TouchableOpacity 
        onPress={() => router.push('/guest/pages/home' as any)}
        className="py-4"
      >
        <Text className="text-white font-bold text-lg underline">Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
}