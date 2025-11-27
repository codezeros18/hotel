import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GuestLayout() {
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
        },
      }}
    >
      {/* === REAL TABS ONLY === */}
      <Tabs.Screen name="home" options={tab("home-outline", "Home")} />
      <Tabs.Screen name="bookings" options={tab("calendar-outline", "Bookings")} />
      <Tabs.Screen name="profile" options={tab("person-outline", "Profile")} />

      {/* === HIDE EVERYTHING UNDER /pages === */}
      <Tabs.Screen name="pages" options={{ href: null }} />
    </Tabs>
  );
}

function tab(icon: any, label: string) {
  return {
    tabBarIcon: ({ focused }: any) => (
      <View
        className={`flex-row items-center ${
          focused ? "bg-primary px-5 py-2 rounded-full" : "bg-white/20 p-3 rounded-full"
        }`}
      >
        <Ionicons name={icon} size={22} color="white" />
        {focused && <Text className="text-white ml-2">{label}</Text>}
      </View>
    ),
  };
}
