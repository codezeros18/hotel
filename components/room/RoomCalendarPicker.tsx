import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function RoomCalendarPicker({ dates, setDates }: any) {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"checkIn" | "checkOut">("checkIn");

  const handleSelect = (event: any, date: Date | undefined) => {
    if (!date) return setShow(false);

    if (mode === "checkIn") {
      setDates({ ...dates, checkIn: date.toDateString(), checkOut: null });
      setMode("checkOut");
      return; // lanjut pilih checkout
    }

    setDates({ ...dates, checkOut: date.toDateString() });
    setShow(false);
  };

  return (
    <View className="px-6 mt-8">
      <Text className="font-poppinsBold text-xl text-text-dark">Your Stay</Text>

      <TouchableOpacity
        onPress={() => { setMode("checkIn"); setShow(true); }}
        className="bg-gray-50 border border-gray-200 mt-3 p-4 rounded-2xl"
      >
        <Text className="text-text-muted">
          {dates.checkIn && dates.checkOut
            ? `${dates.checkIn} → ${dates.checkOut}`
            : "Select Dates"}
        </Text>
      </TouchableOpacity>

      <Modal visible={show} transparent animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/40">
          <View className="bg-white p-4 rounded-2xl shadow-xl w-[90%]">
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="spinner"
              onChange={handleSelect}
            />

            <TouchableOpacity
              onPress={() => setShow(false)}
              className="mt-4 py-3 rounded-xl bg-primary"
            >
              <Text className="text-white font-poppinsSemiBold text-center">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
