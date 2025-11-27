import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import RoomGallery from "../../../../components/room/RoomGallery";

export default function RoomDetail() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [showIn, setShowIn] = useState(false);
  const [showOut, setShowOut] = useState(false);

  const handleIn = (_: any, date?: Date) => {
    if (Platform.OS === "android") setShowIn(false);
    if (date) setCheckIn(date);
  };

  const handleOut = (_: any, date?: Date) => {
    if (Platform.OS === "android") setShowOut(false);
    if (date) setCheckOut(date);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={{ paddingBottom: 160 }} showsVerticalScrollIndicator={false}>

        {/* IMAGE GALLERY */}
        <RoomGallery />

        {/* INFO SECTION */}
        <View className="px-6 mt-6">
          {/* TITLE */}
          <View className="flex-row justify-between items-start">
            <Text className="text-3xl font-poppinsBold text-text-dark w-[70%]">
              Mandarin Suite Room
            </Text>
            <Text className="text-primary-dark font-poppinsBold text-2xl">
              $360
            </Text>
          </View>

          <Text className="text-text-muted font-poppinsMedium mt-1">
            📍 Level 3 — Ocean View
          </Text>

          {/* DATE PICKERS */}
          <Text className="font-poppinsBold text-lg text-text-dark mt-8 mb-2">
            Choose Your Stay
          </Text>

          <View className="bg-bg-light rounded-3xl px-4 py-5 border border-gray-100 flex-row justify-between">
            <TouchableOpacity
              className="flex-1"
              onPress={() => setShowIn(true)}
            >
              <Text className="text-text-muted text-xs">Check-in</Text>
              <Text className="text-text-dark font-poppinsSemiBold mt-1">
                {checkIn ? checkIn.toDateString() : "Select date"}
              </Text>
            </TouchableOpacity>

            <View className="w-[1px] bg-gray-300 mx-3" />

            <TouchableOpacity
              className="flex-1 items-end"
              onPress={() => setShowOut(true)}
            >
              <Text className="text-text-muted text-xs">Check-out</Text>
              <Text className="text-text-dark font-poppinsSemiBold mt-1">
                {checkOut ? checkOut.toDateString() : "Select date"}
              </Text>
            </TouchableOpacity>
          </View>

          {showIn && (
            <DateTimePicker
              value={checkIn || new Date()}
              mode="date"
              display="spinner"
              onChange={handleIn}
            />
          )}

          {showOut && (
            <DateTimePicker
              value={checkOut || new Date()}
              mode="date"
              display="spinner"
              onChange={handleOut}
            />
          )}

          {/* FACILITIES */}
          <Text className="font-poppinsBold text-lg text-text-dark mt-8 mb-3">
            Room Facilities
          </Text>

          <View className="flex-row justify-between border-b border-gray-100 pb-6">
            <Feature icon="bed-outline" label="2 Beds" />
            <Feature icon="water-outline" label="1 Bath" />
            <Feature icon="people-outline" label="4 Guests" />
          </View>

          {/* DESCRIPTION */}
          <View className="mt-6">
            <Text className="font-poppinsBold text-lg text-text-dark mb-2">
              Room Description
            </Text>
            <Text className="text-text-muted leading-6 text-justify font-poppinsRegular">
              Enjoy the luxurious ambiance with ocean view, premium bedding,
              balcony seating, and complimentary breakfast. Perfect for couples
              or families wanting a premium stay experience.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* CTA BUTTON */}
      <View className="absolute bottom-8 left-6 right-6">
        <TouchableOpacity
          onPress={() => router.push("/guest/pages/confirm-booking" as any)}
          className="bg-primary py-4 rounded-2xl items-center shadow-xl"
        >
          <Text className="text-white text-lg font-poppinsBold">
            Confirm Booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Feature({ icon, label }: any) {
  return (
    <View className="flex-row items-center gap-2">
      <Ionicons name={icon} size={18} color="#64748B" />
      <Text className="text-text-dark font-poppinsMedium">{label}</Text>
    </View>
  );
}
