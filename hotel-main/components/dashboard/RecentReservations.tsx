import { Text, View } from "react-native";

const data: Array<{ name: string; room: string; status: "Paid" | "Pending" | "Check-in" }> = [
  { name: "John Doe", room: "Deluxe King", status: "Paid" },
  { name: "Maria Lopez", room: "Suite A2", status: "Pending" },
  { name: "Dimas R.", room: "Family Room", status: "Check-in" },
];

export default function RecentReservations() {
  return (
    <View className="px-5 mt-10 mb-12">
      <Text className="text-xl font-poppinsSemiBold text-text-dark mb-4">
        Recent Reservations
      </Text>

      {data.map((item, i) => (
        <View
          key={i}
          className="bg-white flex-row justify-between items-center rounded-2xl p-5 mb-3 shadow-lg"
        >
          <View>
            <Text className="font-poppinsSemiBold text-text-dark">
              {item.name}
            </Text>
            <Text className="font-poppinsMedium text-text-muted">
              {item.room}
            </Text>
          </View>
          <StatusPill status={item.status} />
        </View>
      ))}
    </View>
  );
}

function StatusPill({ status }: { status: "Paid" | "Pending" | "Check-in" }) {
  const color: Record<"Paid" | "Pending" | "Check-in", string> = {
    Paid: "bg-success",
    Pending: "bg-warning",
    "Check-in": "bg-primary",
  };

  return (
    <Text
      className={`px-3 py-[3px] rounded-full text-white text-xs font-poppinsSemiBold ${color[status]}`}
    >
      {status}
    </Text>
  );
}
