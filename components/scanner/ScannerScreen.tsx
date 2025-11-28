import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Vibration,
    View
} from "react-native";
import CameraFrame from "./CameraFrame"; // 

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [verifiedList, setVerifiedList] = useState<any[]>([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    Vibration.vibrate();

    let resultData;
    try {
      const parsedData = JSON.parse(data);
      resultData = {
        ...parsedData,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    } catch (error) {
      resultData = {
        guestName: "Unknown Format",
        roomNumber: data,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    setScanResult(resultData);
    setVerifiedList((prev) => [resultData, ...prev]);
    setShowList(true);
  };

  const handleResetScan = () => {
    setScanResult(null);
    setScanned(false);
  };

  if (hasPermission === null) {
    return <View className="flex-1 bg-black items-center justify-center"><Text className="text-white">Requesting...</Text></View>;
  }
  if (hasPermission === false) {
    return <View className="flex-1 bg-black items-center justify-center"><Text className="text-white">No Camera Access</Text></View>;
  }

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* COMPONENT KAMERA */}
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        style={StyleSheet.absoluteFillObject}
      >
        {/* OVERLAY GELAP */}
        <View className="flex-1 bg-black/50">
           <View className="flex-1 items-center justify-center">
              <View className="flex-1 w-full bg-black/60" />
              <View className="flex-row h-72">
                <View className="flex-1 bg-black/60" />
                <View className="w-72 h-72 bg-transparent" /> 
                <View className="flex-1 bg-black/60" />
              </View>
              <View className="flex-1 w-full bg-black/60 items-center pt-10">
                 <Text className="text-white/80 text-center font-medium px-10">
                    Arahkan kamera ke QR Code tamu
                 </Text>
              </View>
           </View>
        </View>

        {/* FRAME ANIMASI */}
        <CameraFrame />
      </CameraView>

      {/* POPUP HASIL SCAN */}
      {scanResult && (
        <View className="absolute inset-0 bg-black/80 items-center justify-center px-6 z-50">
          <View className="w-full bg-white rounded-3xl p-6 items-center">
            <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-4">
              <Text className="text-3xl">✓</Text>
            </View>
            <Text className="text-black text-2xl font-bold">Verified</Text>
            
            <View className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 my-6">
              <Text className="text-gray-500 text-xs uppercase">Nama Tamu</Text>
              <Text className="text-black font-bold text-lg mb-2">{scanResult.guestName}</Text>
              
              <Text className="text-gray-500 text-xs uppercase mt-2">Kamar</Text>
              <Text className="text-black font-bold text-lg">{scanResult.roomNumber}</Text>
            </View>

            <TouchableOpacity onPress={handleResetScan} className="w-full bg-blue-600 py-4 rounded-xl">
              <Text className="text-white text-center font-bold">Scan Lagi</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}