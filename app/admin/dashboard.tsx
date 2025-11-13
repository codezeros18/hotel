import { ScrollView, View } from "react-native";
import AdminHeader from "../../components/dashboard/AdminHeader";
import DashboardActions from "../../components/dashboard/DashboardActions";
import DashboardRecent from "../../components/dashboard/DashboardRecent";
import DashboardStats from "../../components/dashboard/DashboardStats";

export default function Dashboard() {
  return (
    <ScrollView className="flex-1 px-5 pt-14 bg-gray-50">
      <AdminHeader />

      {/* 2x2 STAT SECTION */}
      <DashboardStats />

      {/* QUICK ACTION BUTTONS */}
      <DashboardActions />

      {/* RECENT RESERVATIONS */}
      <DashboardRecent />

      <View className="h-20" />
    </ScrollView>
  );
}
