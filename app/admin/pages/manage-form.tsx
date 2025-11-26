import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export type FormField = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "select";
  placeholder?: string;
  options?: string[]; // for select type
  required?: boolean;
  multiline?: boolean;
};

export type ManageFormProps = {
  visible: boolean;
  title?: string;
  fields: FormField[];
  initialValues?: Record<string, string>;
  submitButtonText?: string;
  onCancel: () => void;
  onSubmit: (values: Record<string, string>) => void;
};

export default function ManageForm({
  visible,
  title = "Form",
  fields,
  initialValues = {},
  submitButtonText = "Save",
  onCancel,
  onSubmit,
}: ManageFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    // Initialize values when modal opens or initialValues changes
    const init: Record<string, string> = {};
    fields.forEach((f) => {
      init[f.key] = initialValues[f.key] ?? "";
    });
    setValues(init);
  }, [visible, initialValues, fields]);

  function setValue(key: string, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  function handleSubmit() {
    // Validation: check required fields
    const missing = fields.find((f) => f.required && !values[f.key]?.trim());
    if (missing) {
      Alert.alert("Validation Error", `${missing.label} is required`);
      return;
    }
    onSubmit(values);
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-2xl p-6 max-h-[85%]">
            <Text className="text-xl font-poppinsBold mb-4">{title}</Text>

            <ScrollView className="mb-4" showsVerticalScrollIndicator={true}>
              {fields.map((f) => (
                <View key={f.key} className="mb-4">
                  <Text className="text-sm text-gray-700 font-poppinsMedium mb-2">
                    {f.label}
                    {f.required ? <Text className="text-red-500"> *</Text> : ""}
                  </Text>

                  {f.type === "select" ? (
                    <View className="flex-row flex-wrap gap-2">
                      {(f.options ?? []).map((opt) => {
                        const isActive = values[f.key] === opt;
                        return (
                          <TouchableOpacity
                            key={opt}
                            onPress={() => setValue(f.key, opt)}
                            className={`px-4 py-2 rounded-lg border-2 ${
                              isActive
                                ? "bg-primary border-primary"
                                : "bg-white border-gray-300"
                            }`}
                          >
                            <Text
                              className={`font-poppinsMedium ${
                                isActive ? "text-white" : "text-gray-700"
                              }`}
                            >
                              {opt}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  ) : (
                    <TextInput
                      value={values[f.key]}
                      onChangeText={(t) => setValue(f.key, t)}
                      placeholder={f.placeholder ?? ""}
                      placeholderTextColor="#9CA3AF"
                      multiline={f.type === "textarea" || f.multiline}
                      numberOfLines={f.type === "textarea" ? 4 : 1}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
                    />
                  )}
                </View>
              ))}
            </ScrollView>

            <View className="flex-row justify-end gap-3 pt-4 border-t border-gray-200">
              <TouchableOpacity
                onPress={onCancel}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-50"
              >
                <Text className="text-gray-700 font-poppinsMedium">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSubmit}
                className="px-6 py-2 rounded-lg bg-primary"
              >
                <Text className="text-white font-poppinsMedium">
                  {submitButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}