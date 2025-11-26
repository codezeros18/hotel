import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import ManageForm, { FormField } from "./manage-form";

type Room = {
  id: string;
  number: string;
  note?: string;
  status?: "available" | "occupied";
};

const initialRooms: Room[] = [
  { id: "1", number: "101", note: "Near elevator", status: "available" },
  { id: "2", number: "102", note: "Sea view", status: "occupied" },
  { id: "3", number: "203", note: "Corner room", status: "available" },
];

export default function ManageRooms() {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const roomFields: FormField[] = [
    {
      key: "number",
      label: "Room Number",
      placeholder: "e.g. 101",
      required: true,
    },
    {
      key: "note",
      label: "Note",
      placeholder: "e.g. Near elevator",
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      options: ["available", "occupied"],
      required: true,
    },
  ];

  function openAdd() {
    setEditingId(null);
    setFormValues({ number: "", note: "", status: "available" });
    setModalVisible(true);
  }

  function openEdit(r: Room) {
    setEditingId(r.id);
    setFormValues({
      number: r.number,
      note: r.note ?? "",
      status: r.status ?? "available",
    });
    setModalVisible(true);
  }

  function handleSubmit(values: Record<string, string>) {
    const trimmedNumber = values.number.trim();

    // Check for duplicates
    const duplicate = rooms.find((r) => r.number === trimmedNumber && r.id !== editingId);
    if (duplicate) {
      Alert.alert("Validation", `Room ${trimmedNumber} already exists`);
      return;
    }

    if (editingId) {
      setRooms((prev) =>
        prev.map((r) =>
          r.id === editingId
            ? {
                ...r,
                number: trimmedNumber,
                note: values.note.trim(),
                status: values.status as "available" | "occupied",
              }
            : r
        )
      );
    } else {
      const newRoom: Room = {
        id: Date.now().toString(),
        number: trimmedNumber,
        note: values.note.trim(),
        status: values.status as "available" | "occupied",
      };
      setRooms((prev) => [newRoom, ...prev]);
    }

    setModalVisible(false);
  }

  function remove(r: Room) {
    Alert.alert("Delete Room", `Delete room ${r.number}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setRooms((prev) => prev.filter((p) => p.id !== r.id)),
      },
    ]);
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-poppinsBold">Rooms</Text>
        <TouchableOpacity onPress={openAdd} className="bg-primary px-4 py-2 rounded-lg shadow">
          <Text className="text-white font-poppinsSemiBold">Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border rounded-lg p-3 mb-3 bg-white/90 flex-row justify-between items-center">
            <View style={{ flex: 1 }}>
              <Text className="text-lg font-poppinsSemiBold">Room {item.number}</Text>
              {item.note ? <Text className="text-sm text-gray-600">{item.note}</Text> : null}
              <Text className="text-sm mt-1">
                Status:{" "}
                <Text
                  className={
                    item.status === "available" ? "text-green-600" : "text-red-600"
                  }
                >
                  {item.status}
                </Text>
              </Text>
            </View>

            <View className="flex-row gap-2">
              <TouchableOpacity
                onPress={() => openEdit(item)}
                className="px-3 py-2 bg-yellow-400 rounded-md"
              >
                <Text className="font-poppinsMedium">Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => remove(item)}
                className="px-3 py-2 bg-red-500 rounded-md"
              >
                <Text className="text-white font-poppinsMedium">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View className="items-center mt-8">
            <Text className="text-gray-500">No rooms yet.</Text>
          </View>
        }
      />

      <ManageForm
        visible={modalVisible}
        title={editingId ? "Edit Room" : "Add Room"}
        fields={roomFields}
        initialValues={formValues}
        submitButtonText={editingId ? "Save" : "Create"}
        onCancel={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}