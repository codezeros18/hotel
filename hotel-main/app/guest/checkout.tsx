import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Checkout() {
  const router = useRouter();
  
  const [paymentMethod, setPaymentMethod] = useState('credit_card'); 

  const handlePayment = () => {
    Alert.alert(
      "Payment Successful", 
      `You paid $360 using ${paymentMethod === 'credit_card' ? 'Credit Card' : 'PayPal'}`
    );
  };

  return (
    <View className="flex-1 bg-gray-50 relative">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-4 flex-row items-center gap-4 border-b border-gray-100 shadow-sm">
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center hover:bg-gray-100"
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Checkout</Text>
      </View>

      {/* UPDATE 1: paddingBottom dibesarkan jadi 200 
         supaya konten paling bawah bisa di-scroll sampai melewati tombol melayang 
      */}
      <ScrollView className="flex-1 px-6 pt-6" contentContainerStyle={{ paddingBottom: 200 }} showsVerticalScrollIndicator={false}>
        
        {/* Order Summary */}
        <Text className="font-bold text-lg mb-3 text-gray-900">Order Summary</Text>
        <View className="bg-white p-4 rounded-2xl flex-row gap-4 mb-6 shadow-sm border border-gray-100">
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=200" }} 
            className="w-24 h-24 rounded-xl" 
            resizeMode="cover"
          />
          <View className="flex-1 justify-center">
            <Text className="font-bold text-gray-900 text-lg">Laskar Cinta Hotel</Text>
            <Text className="text-gray-500 text-sm mt-1">1 King Bed • 2 Guest</Text>
            <View className="mt-2 bg-blue-50 px-3 py-1 rounded-md self-start">
              <Text className="text-blue-600 text-xs font-bold">📅 24 - 26 Nov</Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <Text className="font-bold text-lg mb-3 text-gray-900">Payment Method</Text>
        <View className="gap-3 mb-8">
          
          {/* Tombol Credit Card */}
          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => setPaymentMethod('credit_card')}
            className={`flex-row items-center justify-between p-4 rounded-2xl border-2 transition-all ${
              paymentMethod === 'credit_card' 
                ? 'bg-white border-[#2F5F45] shadow-sm' 
                : 'bg-white border-gray-100'
            }`}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-7 bg-blue-900 rounded items-center justify-center">
                 <Text className="text-[9px] text-white font-bold tracking-widest">VISA</Text>
              </View>
              <Text className={`font-medium ${paymentMethod === 'credit_card' ? 'text-gray-900' : 'text-gray-500'}`}>Credit Card</Text>
            </View>
            <View className={`w-6 h-6 rounded-full border flex items-center justify-center ${
               paymentMethod === 'credit_card' ? 'border-[#2F5F45]' : 'border-gray-300'
            }`}>
              {paymentMethod === 'credit_card' && <View className="w-3 h-3 bg-[#2F5F45] rounded-full" />}
            </View>
          </TouchableOpacity>

          {/* Tombol PayPal */}
          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => setPaymentMethod('paypal')}
            className={`flex-row items-center justify-between p-4 rounded-2xl border-2 transition-all ${
              paymentMethod === 'paypal' 
                ? 'bg-white border-[#2F5F45] shadow-sm' 
                : 'bg-white border-gray-100'
            }`}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-7 bg-blue-100 rounded items-center justify-center">
                 <Text className="text-[9px] text-blue-800 font-bold">Pay</Text>
              </View>
              <Text className={`font-medium ${paymentMethod === 'paypal' ? 'text-gray-900' : 'text-gray-500'}`}>PayPal</Text>
            </View>
            <View className={`w-6 h-6 rounded-full border flex items-center justify-center ${
               paymentMethod === 'paypal' ? 'border-[#2F5F45]' : 'border-gray-300'
            }`}>
              {paymentMethod === 'paypal' && <View className="w-3 h-3 bg-[#2F5F45] rounded-full" />}
            </View>
          </TouchableOpacity>

        </View>

        {/* Price Details */}
        <View className="bg-white p-5 rounded-2xl border border-gray-100 mb-6">
          <View className="flex-row justify-between mb-3"><Text className="text-gray-500">Room (2 nights)</Text><Text className="text-gray-900 font-medium">$340</Text></View>
          <View className="flex-row justify-between mb-3"><Text className="text-gray-500">Taxes & Fees</Text><Text className="text-gray-900 font-medium">$20</Text></View>
          <View className="h-[1px] bg-gray-200 my-3" />
          <View className="flex-row justify-between items-center"><Text className="font-bold text-gray-900 text-lg">Total Amount</Text><Text className="font-bold text-xl text-[#2F5F45]">$360</Text></View>
        </View>

      </ScrollView>

      {/* --- UPDATE 2: FLOATING BUTTON DINAIKKAN --- */}
      {/* bottom-24: Jarak dari bawah diperbesar drastis (sekitar 96px) 
          z-50: Memastikan tombol ada di lapisan paling atas (di atas tab bar)
      */}
      <View className="absolute bottom-24 left-6 right-6 z-50">
        <View className="bg-white p-2 rounded-[25px] shadow-2xl shadow-black/20 border border-gray-100">
            <TouchableOpacity 
                onPress={handlePayment} 
                className="w-full bg-[#2F5F45] py-4 rounded-[20px] shadow-lg items-center active:scale-95"
            >
                <Text className="text-white font-bold text-lg">Pay Now</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}