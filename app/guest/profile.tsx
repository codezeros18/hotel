import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/"),
      },
    ]);
  };

  return (
    <ScrollView
      className="flex-1 bg-bg-light"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* HEADER */}
      <View className="items-center pt-20 pb-10 bg-white rounded-b-3xl shadow-md">
        <View className="relative">
          <Image
            source={require("../../assets/images/profile1.jpg")}
            className="w-28 h-28 rounded-full border-4 border-primary/20"
          />

          <TouchableOpacity className="absolute bottom-0 right-0 bg-primary w-9 h-9 rounded-full items-center justify-center border-2 border-white shadow-md">
            <Ionicons name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <Text className="mt-4 text-2xl font-poppinsBold text-text-dark">
          Marko Guest
        </Text>
        <Text className="text-text-muted font-poppinsMedium">
          +62 812-3456-7890
        </Text>
        <Text className="text-text-muted font-poppinsMedium">
          marko@student.umn.ac.id
        </Text>

        {/* Membership Badge */}
        <View className="mt-3 bg-primary/10 px-4 py-1.5 rounded-full flex-row items-center">
          <Ionicons name="trophy" size={14} color="#0056D6" />
          <Text className="ml-1 text-primary-dark font-poppinsMedium text-sm">
            Gold Member
          </Text>
        </View>
      </View>

      {/* SECTION */}
      {/* <View className="px-5 mt-8 space-y-3">
        <SectionButton
          icon="person-outline"
          label="Personal Information"
          onPress={() => {}}
        />
        <SectionButton
          icon="card-outline"
          label="Payment Methods"
          onPress={() => {}}
        />
      </View> */}

      {/* LOGOUT */}
      <View className="px-5 mt-10">
        <TouchableOpacity
          onPress={logout}
          className="flex-row items-center bg-white rounded-2xl p-4 border border-red-200 shadow-sm"
        >
          <View className="bg-red-100 rounded-xl w-10 h-10 items-center justify-center mr-4">
            <Ionicons name="log-out-outline" size={20} color="#DC2626" />
          </View>

          <Text className="text-red-600 font-poppinsSemiBold text-lg">
            Log Out
          </Text>
        </TouchableOpacity>

        <Text className="text-center mt-4 text-text-muted text-xs">
          Version 1.0.0 (Beta)
        </Text>
      </View>
    </ScrollView>
  );
}

function SectionButton({
  icon,
  label,
  onPress,
}: {
  icon: any;
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-5 flex-row items-center shadow-md"
    >
      <View className="bg-primary/10 w-12 h-12 rounded-xl items-center justify-center mr-4">
        <Ionicons name={icon} size={22} color="#0056D6" />
      </View>

      <Text className="flex-1 text-lg font-poppinsMedium text-text-dark">
        {label}
      </Text>

      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );
}
