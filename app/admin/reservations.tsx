import React from "react";
import { ScrollView, Text, View } from "react-native";

interface Reservation {
  id: string;
  guestName: string;
  roomNumber: string;
  roomType: string;
  bedType: string;
  price: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: string;
}

export default function Reservations() {
  const reservations: Reservation[] = [
    {
      id: "1",
      guestName: "Lintang Balakosa Ardhana",
      roomNumber: "A203",
      roomType: "Deluxe Room",
      bedType: "King Bed",
      price: 850000,
      checkIn: "2025-01-12",
      checkOut: "2025-01-15",
      guests: 2,
      status: "Confirmed",
    },
    {
      id: "2",
      guestName: "Nanda Valeri",
      roomNumber: "B107",
      roomType: "Superior Room",
      bedType: "Queen Bed",
      price: 650000,
      checkIn: "2025-02-01",
      checkOut: "2025-02-03",
      guests: 1,
      status: "Pending",
    },
    {
      id: "3",
      guestName: "Paulus Marchionni Sadipun",
      roomNumber: "C305",
      roomType: "Suite Room",
      bedType: "Twin Bed",
      price: 1200000,
      checkIn: "2025-01-20",
      checkOut: "2025-01-24",
      guests: 4,
      status: "Completed",
    },
      {
      id: "4",
      guestName: "Dimas Pradipta",
      roomNumber: "A203",
      roomType: "Deluxe Room",
      bedType: "King Bed",
      price: 850000,
      checkIn: "2025-01-12",
      checkOut: "2025-01-15",
      guests: 2,
      status: "Confirmed",
    },
      {
      id: "5",
      guestName: "Antony Chandra",
      roomNumber: "A203",
      roomType: "Deluxe Room",
      bedType: "King Bed",
      price: 850000,
      checkIn: "2025-01-12",
      checkOut: "2025-01-15",
      guests: 2,
      status: "Canceled",
    },
  ];

  const statusClassMap: Record<string, string> = {
    Pending:
      "px-3 py-1 rounded-full text-sm font-semibold text-yellow-700 bg-yellow-200",
    Confirmed:
      "px-3 py-1 rounded-full text-sm font-semibold text-green-700 bg-green-200",
    Completed:
      "px-3 py-1 rounded-full text-sm font-semibold text-blue-700 bg-blue-200",
    Canceled:
      "px-3 py-1 rounded-full text-sm font-semibold text-red-700 bg-red-200",
    Default:
      "px-3 py-1 rounded-full text-sm font-semibold text-gray-600 bg-gray-200",
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("id-ID", {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).replace('IDR', 'Rp');
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">

      {/* DISINI YANG DIUBAH: mt-8 jadi mt-14 biar agak turun */}
      <View className="mt-14 mb-6">
        <Text className="text-3xl font-extrabold tracking-tight">
          Reservations 
        </Text>
        <Text className="text-gray-500 mt-1">
          Manage all guest bookings in the system
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {reservations.map((item) => {
          const statusClass =
            statusClassMap[item.status] ?? statusClassMap["Default"];

          return (
            <View
              key={item.id}
              className="
                bg-white p-5 rounded-2xl mb-6 shadow-sm 
                border-l-8 border-primary flex-row
              "
            >
              {/* Image component dihapus di sini */}

              <View className="flex-1">

                <Text className="text-xl font-semibold text-gray-800">
                  {item.guestName}
                </Text>

                <Text className="text-gray-500 -mt-1 mb-2">
                  {item.roomType} • {item.bedType}
                </Text>

                <View className="flex-row">
                  <Text className="font-medium text-gray-500 w-28">Room:</Text>
                  <Text>{item.roomNumber}</Text>
                </View>

                <View className="flex-row">
                  <Text className="font-medium text-gray-500 w-28">
                    Check-in:
                  </Text>
                  <Text>{formatDate(item.checkIn)}</Text>
                </View>

                <View className="flex-row">
                  <Text className="font-medium text-gray-500 w-28">
                    Check-out:
                  </Text>
                  <Text>{formatDate(item.checkOut)}</Text>
                </View>

                <View className="flex-row">
                  <Text className="font-medium text-gray-500 w-28">Guests:</Text>
                  <Text>{item.guests}</Text>
                </View>

                <View className="flex-row">
                  <Text className="font-medium text-gray-500 w-28">Price:</Text>
                  <Text className="font-bold text-primary">
                    {formatPrice(item.price)}/night
                  </Text>
                </View>

                <View className="flex-row mt-3 items-center">
                  <Text className="font-medium text-gray-500 w-28">
                    Status:
                  </Text>
                  <Text className={statusClass}>{item.status}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}