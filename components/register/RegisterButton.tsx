import { Text, TouchableOpacity } from "react-native";

export default function RegisterButton({ label, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-accent py-4 rounded-2xl shadow-lg items-center"
    >
      <Text className="text-black text-xl font-poppinsSemiBold">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
