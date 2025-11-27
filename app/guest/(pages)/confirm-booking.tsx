import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ConfirmBooking() {
  return (
    <View className="flex-1 bg-primary items-center justify-center px-8">
      <StatusBar barStyle="light-content" />

      {/* SUCCESS ICON */}
      <View className="bg-white/25 p-10 rounded-full backdrop-blur-md shadow-lg mb-8">
        <Ionicons name="checkmark-circle" size={90} color="white" />
      </View>

      {/* TITLE */}
      <Text className="text-white text-4xl font-poppinsBold text-center mb-3">
        Payment Success!
      </Text>

      {/* SUBTEXT */}
      <Text className="text-white/80 text-center font-poppinsMedium leading-6 text-base mb-12">
        Your booking has been confirmed.{"\n"}
        The receipt has been sent to your email.
      </Text>

      {/* BUTTON - TICKET */}
      <TouchableOpacity
        onPress={() => router.push("/guest/booking-detail/HTL-88293" as any)}
        className="w-full bg-white py-4 rounded-2xl shadow-xl items-center mb-4"
      >
        <Text className="text-primary-dark font-poppinsSemiBold text-lg">
          View E-Ticket
        </Text>
      </TouchableOpacity>

      {/* BUTTON - HOME */}
      <TouchableOpacity
        onPress={() => router.push("/guest/home" as any)}
        className="py-3"
      >
        <Text className="text-white font-poppinsSemiBold text-lg underline">
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
