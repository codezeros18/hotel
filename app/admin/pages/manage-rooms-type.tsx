import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import ManageForm, { FormField } from "./manage-form";

type RoomType = {
  id: string;
  name: string;
  description?: string;
};

const initialRoomTypes: RoomType[] = [
  { id: "1", name: "Deluxe", description: "Comfortable room with queen bed" },
  { id: "2", name: "Superior", description: "Spacious room with city view" },
  { id: "3", name: "Suite", description: "Large suite with living area" },
];

export default function ManageRoomTypes() {
  const [types, setTypes] = useState<RoomType[]>(initialRoomTypes);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const roomTypeFields: FormField[] = [
    {
      key: "name",
      label: "Room Type Name",
      placeholder: "e.g. Deluxe",
      required: true,
    },
    {
      key: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Brief description",
    },
  ];

  function openAdd() {
    setEditingId(null);
    setFormValues({ name: "", description: "" });
    setModalVisible(true);
  }

  function openEdit(t: RoomType) {
    setEditingId(t.id);
    setFormValues({
      name: t.name,
      description: t.description ?? "",
    });
    setModalVisible(true);
  }

  function handleSubmit(values: Record<string, string>) {
    if (editingId) {
      setTypes((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: values.name.trim(),
                description: values.description.trim(),
              }
            : p
        )
      );
    } else {
      const newType: RoomType = {
        id: Date.now().toString(),
        name: values.name.trim(),
        description: values.description.trim(),
      };
      setTypes((prev) => [newType, ...prev]);
    }

    setModalVisible(false);
  }

  function remove(t: RoomType) {
    Alert.alert("Delete Room Type", `Delete "${t.name}"?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setTypes((prev) => prev.filter((p) => p.id !== t.id)),
      },
    ]);
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-poppinsBold">Room Types</Text>
        <TouchableOpacity onPress={openAdd} className="bg-primary px-4 py-2 rounded-lg shadow">
          <Text className="text-white font-poppinsSemiBold">Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={types}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border rounded-lg p-3 mb-3 bg-white/90 flex-row justify-between items-center">
            <View style={{ flex: 1 }}>
              <Text className="text-lg font-poppinsSemiBold">{item.name}</Text>
              {item.description ? (
                <Text className="text-sm text-gray-600">{item.description}</Text>
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
            <Text className="text-gray-500">No room types yet.</Text>
          </View>
        }
      />

      <ManageForm
        visible={modalVisible}
        title={editingId ? "Edit Room Type" : "Add Room Type"}
        fields={roomTypeFields}
        initialValues={formValues}
        submitButtonText={editingId ? "Save" : "Create"}
        onCancel={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}