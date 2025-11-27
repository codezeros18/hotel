import { ScrollView } from "react-native";
import AdminStatsGrid from "../../components/dashboard/AdminStatsGrid";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentReservations from "../../components/dashboard/RecentReservations";

export default function Dashboard() {
  return (
    <ScrollView className="flex-1 bg-white pt-8">
      <DashboardHeader />
      <AdminStatsGrid />
      <QuickActions />
      <RecentReservations />
    </ScrollView>
  );
}
