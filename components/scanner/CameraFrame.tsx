import React, { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

export default function CameraFrame() {
  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 280],
  });

  return (
    <View className="absolute inset-0 items-center justify-center z-10 pointer-events-none">
      <View className="w-72 h-72 relative">
        {/* Pojokan Frame */}
        <View className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl" />
        <View className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-500 rounded-tr-3xl" />
        <View className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-500 rounded-bl-3xl" />
        <View className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-500 rounded-br-3xl" />

        {/* Garis Scan Animasi */}
        <Animated.View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#3B82F6",
            transform: [{ translateY }],
            shadowColor: "#3B82F6",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        >
            <View className="w-full h-12 bg-blue-500/20" />
        </Animated.View>
      </View>
    </View>
  );
}