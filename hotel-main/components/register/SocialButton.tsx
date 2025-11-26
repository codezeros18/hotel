import { Image, Text, TouchableOpacity } from "react-native";

export default function SocialButton({ label, icon }: any) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl py-4 shadow flex-row items-center justify-center mb-3">
      <Image source={icon} className="w-5 h-5 mr-4" />
      <Text className="text-lg font-poppinsMedium text-text-dark">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
