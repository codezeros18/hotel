import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import ManageForm, { FormField } from "./manage-form";

type Hotel = {
  id: string;
  name: string;
  location?: string;
};

const initialHotels: Hotel[] = [
  { id: "1", name: "Hotel A", location: "City X" },
  { id: "2", name: "Hotel B", location: "City Y" },
];

export default function ManageHotels() {
  const [hotels, setHotels] = useState<Hotel[]>(initialHotels);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const hotelFields: FormField[] = [
    {
      key: "name",
      label: "Hotel Name",
      placeholder: "Enter hotel name",
      required: true,
    },
    {
      key: "location",
      label: "Location",
      placeholder: "City / Address",
    },
  ];

  function openAdd() {
    setEditingId(null);
    setFormValues({ name: "", location: "" });
    setModalVisible(true);
  }

  function openEdit(h: Hotel) {
    setEditingId(h.id);
    setFormValues({
      name: h.name,
      location: h.location ?? "",
    });
    setModalVisible(true);
  }

  function handleSubmit(values: Record<string, string>) {
    if (editingId) {
      setHotels((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: values.name.trim(),
                location: values.location.trim(),
              }
            : p
        )
      );
    } else {
      const newHotel: Hotel = {
        id: Date.now().toString(),
        name: values.name.trim(),
        location: values.location.trim(),
      };
      setHotels((prev) => [newHotel, ...prev]);
    }

    setModalVisible(false);
  }

  function remove(h: Hotel) {
    Alert.alert("Delete Hotel", `Delete "${h.name}"?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setHotels((prev) => prev.filter((p) => p.id !== h.id)),
      },
    ]);
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-poppinsBold">Hotels</Text>
        <TouchableOpacity onPress={openAdd} className="bg-primary px-4 py-2 rounded-lg shadow">
          <Text className="text-white font-poppinsSemiBold">Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border rounded-lg p-3 mb-3 bg-white/90 flex-row justify-between items-center">
            <View style={{ flex: 1 }}>
              <Text className="text-lg font-poppinsSemiBold">{item.name}</Text>
              {item.location ? (
                <Text className="text-sm text-gray-600">{item.location}</Text>
              ) : null}
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
            <Text className="text-gray-500">No hotels yet.</Text>
          </View>
        }
      />

      <ManageForm
        visible={modalVisible}
        title={editingId ? "Edit Hotel" : "Add Hotel"}
        fields={hotelFields}
        initialValues={formValues}
        submitButtonText={editingId ? "Save" : "Create"}
        onCancel={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}