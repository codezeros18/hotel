import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ManageRoomTypes from "./pages/manage-rooms-type";
import ManageRooms from "./pages/manage-rooms";

type Tab =  "roomTypes" | "rooms";

export default function Manage() {
  const [activeTab, setActiveTab] = useState<Tab>("roomTypes");

  const tabs: { key: Tab; label: string }[] = [
    { key: "roomTypes", label: "Room Types" },
    { key: "rooms", label: "Rooms" },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 pt-4 pb-2 shadow-sm">
        <Text className="text-2xl font-poppinsBold mb-4">Management</Text>

        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab.key ? "bg-primary" : "bg-gray-100"
              }`}
            >
              <Text
                className={`font-poppinsMedium ${
                  activeTab === tab.key ? "text-white" : "text-gray-700"
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <ScrollView className="flex-1">
        {activeTab === "roomTypes" && <ManageRoomTypes />}
        {activeTab === "rooms" && <ManageRooms />}
      </ScrollView>
    </View>
  );
}