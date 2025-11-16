import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterInput({
  icon,
  placeholder,
  secure,
  keyboardType,
  toggleSecure,
}: any) {
  return (
    <View className="bg-white/95 rounded-2xl px-5 py-3 flex-row items-center mb-4 shadow">
      <Ionicons name={icon} size={22} color="#003C99" />
      <TextInput
        placeholder={placeholder}
        className="ml-3 flex-1 text-base font-poppinsMedium text-text-dark"
        placeholderTextColor="#8A8F98"
        secureTextEntry={secure}
        keyboardType={keyboardType}
      />
      {toggleSecure && (
        <TouchableOpacity onPress={toggleSecure}>
          <Ionicons
            name={secure ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#8A8F98"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
