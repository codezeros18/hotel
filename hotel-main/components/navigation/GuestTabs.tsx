import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function GuestTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 40,
          height: 70,
          backgroundColor: "transparent",
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={50}
            tint="light"
            style={{
              flex: 1,
              borderRadius: 40,
              overflow: "hidden",
            }}
          />
        ),
      }}
    >

      {/* HOME */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`flex-row items-center ${
                focused
                  ? "bg-primary px-5 py-2 rounded-full"
                  : "bg-white/20 backdrop-blur-md p-3 rounded-full"
              }`}
            >
              <Ionicons name="home-outline" size={22} color="white" />
              {focused && (
                <Text className="text-white font-poppinsMedium ml-2">
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* BOOKINGS */}
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`flex-row items-center ${
                focused
                  ? "bg-primary px-5 py-2 rounded-full"
                  : "bg-white/20 backdrop-blur-md p-3 rounded-full"
              }`}
            >
              <Ionicons name="calendar-outline" size={22} color="white" />
              {focused && (
                <Text className="text-white font-poppinsMedium ml-2">
                  Bookings
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`flex-row items-center ${
                focused
                  ? "bg-primary px-5 py-2 rounded-full"
                  : "bg-white/20 backdrop-blur-md p-3 rounded-full"
              }`}
            >
              <Ionicons name="person-outline" size={22} color="white" />
              {focused && (
                <Text className="text-white font-poppinsMedium ml-2">
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />

    </Tabs>
  );
}
