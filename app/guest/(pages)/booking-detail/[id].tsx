import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function BookingDetail() {
  return (
    <View className="flex-1 bg-bg-light">
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View className="bg-primary pb-24 pt-14 px-6 rounded-b-[42px] shadow-lg">
        {/* NAV */}
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 bg-white/25 backdrop-blur-md rounded-full items-center justify-center"
          >
            <Ionicons name="chevron-back" size={22} color="white" />
          </TouchableOpacity>

          <Text className="text-white font-poppinsSemiBold text-lg">
            Booking Details
          </Text>

          <View className="w-10" />
        </View>

        {/* STATUS */}
        <View className="items-center">
          <View className="bg-white/25 p-4 rounded-full mb-3 backdrop-blur-md">
            <Ionicons name="checkmark-circle" size={52} color="white" />
          </View>
          <Text className="text-white text-3xl font-poppinsBold">
            Booking Confirmed!
          </Text>
          <Text className="text-white/80 text-sm mt-1 font-poppinsMedium">
            Your stay is ready 🎉
          </Text>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView
        className="-mt-16 px-6"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* CARD */}
        <View className="bg-white p-6 rounded-[28px] shadow-xl">

          {/* HOTEL INFO */}
          <View className="flex-row items-center gap-4 border-b border-gray-100 pb-6 mb-6">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&w=300",
              }}
              className="w-24 h-24 rounded-2xl"
            />

            <View className="flex-1 justify-center">
              <Text className="text-xl font-poppinsBold text-text-dark">
                Laskar Cinta Hotel
              </Text>
              <Text className="text-text-muted text-sm mt-1 font-poppinsMedium">
                📍 North Sragentina, Austria
              </Text>

              <View className="flex-row items-center gap-1 mt-2">
                <Ionicons name="star" size={14} color="#D4AF37" />
                <Text className="text-xs text-text-dark font-poppinsSemiBold">
                  4.8 • 2,300 reviews
                </Text>
              </View>
            </View>
          </View>

          {/* CHECK-IN / OUT */}
          <Text className="font-poppinsBold text-lg text-text-dark mb-3">
            Stay Duration
          </Text>

          <View className="flex-row justify-between bg-bg-light p-4 rounded-2xl border border-gray-100 mb-6">
            <View>
              <Text className="text-text-muted text-xs">Check-in</Text>
              <Text className="text-text-dark font-poppinsSemiBold mt-1">
                24 Nov 2025
              </Text>
              <Text className="text-text-muted text-xs">After 2:00 PM</Text>
            </View>

            <View className="w-[1px] bg-gray-300" />

            <View className="items-end">
              <Text className="text-text-muted text-xs">Check-out</Text>
              <Text className="text-text-dark font-poppinsSemiBold mt-1">
                26 Nov 2025
              </Text>
              <Text className="text-text-muted text-xs">Before 12:00 PM</Text>
            </View>
          </View>

          {/* QR & BOOKING ID */}
          <View className="items-center mb-8">
            <Text className="text-text-muted text-xs tracking-wide mb-2 uppercase">
              Booking ID
            </Text>

            <Text className="text-primary-dark text-2xl font-poppinsBold tracking-wider mb-4">
              HTL-88293
            </Text>

            <View className="border-[2px] border-dashed border-gray-300 p-3 rounded-2xl">
              <Ionicons name="qr-code-outline" size={110} color="#1E293B" />
            </View>

            <Text className="text-text-muted text-[10px] mt-2">
              Present this QR code at the receptionist
            </Text>
          </View>

          {/* SUMMARY */}
          <View className="gap-3">
            <Row label="Guest" value="Gord (You)" />
            <Row label="Room Type" value="King Suite" />
            <Row label="Total Paid" value="$360" bold highlight />
          </View>
        </View>

        {/* ACTIONS */}
        <TouchableOpacity
          onPress={() => router.push("/guest/home" as any)}
          className="bg-primary py-4 rounded-2xl mt-6 shadow-xl items-center"
        >
          <Text className="text-white font-poppinsSemiBold text-lg">
            Back to Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("PDF downloaded successfully!")}
          className="py-4 mt-3 rounded-2xl border border-gray-200 bg-white items-center"
        >
          <Text className="text-text-dark font-poppinsSemiBold text-lg">
            Download PDF
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function Row({ label, value, bold, highlight }: any) {
  return (
    <View className="flex-row justify-between pb-2 border-b border-gray-50">
      <Text className="text-text-muted font-poppinsMedium">{label}</Text>
      <Text
        className={`font-poppinsBold ${
          highlight ? "text-primary-dark text-xl" : "text-text-dark"
        }`}
      >
        {value}
      </Text>
    </View>
  );
}
