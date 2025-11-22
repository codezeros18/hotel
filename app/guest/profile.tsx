import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const router = useRouter();

  // Fungsi Logout (Pura-pura)
  const handleLogout = () => {
    Alert.alert(
      "Logout", 
      "Apakah Anda yakin ingin keluar?", 
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Ya, Keluar", 
          style: "destructive", 
          onPress: () => {
            // Arahkan kembali ke halaman login (index)
            router.replace('/'); 
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      {/* --- HEADER PROFILE --- */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
            {/* Pastikan file profile1.jpg ada di folder assets/images kamu */}
            <Image 
              source={require('../../assets/images/profile1.jpg')} 
              style={styles.avatar} 
            />
            {/* Tombol Edit Kecil di Avatar */}
            <TouchableOpacity style={styles.editAvatarBtn}>
                <Ionicons name="camera" size={14} color="white" />
            </TouchableOpacity>
        </View>
        
        <Text style={styles.name}>Marko Guest</Text>
        <Text style={styles.email}>marko@student.umn.ac.id</Text>
        
        {/* Badge Member */}
        <View style={styles.memberBadge}>
            <Ionicons name="trophy" size={12} color="#CA8A04" />
            <Text style={styles.memberText}>Gold Member</Text>
        </View>
      </View>

      {/* --- MENU SECTIONS --- */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        
        <MenuButton icon="person-outline" text="Personal Information" onPress={() => {}} />
        <MenuButton icon="card-outline" text="Payment Methods" onPress={() => {}} />
        <MenuButton icon="notifications-outline" text="Notifications" onPress={() => {}} />
        <MenuButton icon="shield-checkmark-outline" text="Security & Password" onPress={() => {}} />
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>General</Text>
        
        <MenuButton icon="help-circle-outline" text="Help Center" onPress={() => {}} />
        <MenuButton icon="document-text-outline" text="Terms & Conditions" onPress={() => {}} />
        <MenuButton icon="star-outline" text="Rate App" onPress={() => {}} />
      </View>

      {/* --- LOGOUT BUTTON --- */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <View style={styles.logoutIconContainer}>
                <Ionicons name="log-out-outline" size={20} color="#DC2626" />
            </View>
            <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Version 1.0.0 (Beta)</Text>
      </View>

    </ScrollView>
  );
}

// --- KOMPONEN TOMBOL MENU (Biar Kodingan Rapi) ---
const MenuButton = ({ icon, text, onPress }: { icon: any, text: string, onPress: () => void }) => (
  <TouchableOpacity style={styles.menuBtn} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.menuIconContainer}>
      <Ionicons name={icon} size={20} color="#2563EB" />
    </View>
    <Text style={styles.menuText}>{text}</Text>
    <Ionicons name="chevron-forward" size={18} color="#D1D5DB" />
  </TouchableOpacity>
);

// --- STYLESHEET (STYLE MANUAL) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Abu-abu sangat muda
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#EFF6FF', // Ring luar biru muda
  },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2563EB',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  memberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9C3', // Kuning muda
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },
  memberText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#854D0E',
    marginLeft: 4,
  },
  menuSection: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
  menuBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    // Shadow card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#EFF6FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  footer: {
    paddingHorizontal: 24,
    marginTop: 12,
    marginBottom: 40,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2', // Merah sangat muda
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  logoutIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#FEE2E2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DC2626', // Merah
  },
  versionText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#D1D5DB',
    fontSize: 12,
  },
});