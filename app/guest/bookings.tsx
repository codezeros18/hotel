import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- DATA DUMMY ---
const bookingsData = [
  { 
    id: 'BK-8829', 
    hotel: 'Mandarin Oriental', 
    image: require('../../assets/images/1.webp'), 
    date: '12 - 14 Oct 2025', 
    status: 'Upcoming', 
    price: '$188', 
    type: 'upcoming' 
  },
  { 
    id: 'BK-7721', 
    hotel: 'Kimpton Naranta', 
    image: require('../../assets/images/2.webp'),
    date: '01 - 03 Sep 2025', 
    status: 'Completed', 
    price: '$240', 
    type: 'history' 
  },
  { 
    id: 'BK-1002', 
    hotel: 'Raffles Jakarta', 
    image: require('../../assets/images/3.webp'),
    date: '20 Aug 2025', 
    status: 'Cancelled', 
    price: '$210', 
    type: 'history' 
  },
  { 
    id: 'BK-5541', 
    hotel: 'Ayana Resort', 
    image: require('../../assets/images/4.webp'),
    date: '15 Jan 2024', 
    status: 'Completed', 
    price: '$350', 
    type: 'history' 
  },
];

export default function Bookings() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming');
  const filteredData = bookingsData.filter(item => item.type === activeTab);

  const getStatusColor = (status: string) => {
    if (status === 'Upcoming') return { bg: '#DBEAFE', text: '#1D4ED8' };
    if (status === 'Cancelled') return { bg: '#FEE2E2', text: '#B91C1C' };
    return { bg: '#DCFCE7', text: '#15803D' };
  };

  return (
    <View style={styles.container}>
      {/* --- HEADER --- */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Trips</Text>
        
        <View style={styles.tabContainer}>
            <TouchableOpacity 
                onPress={() => setActiveTab('upcoming')}
                style={[styles.tabButton, activeTab === 'upcoming' && styles.activeTab]}
            >
                <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => setActiveTab('history')}
                style={[styles.tabButton, activeTab === 'history' && styles.activeTab]}
            >
                <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>History</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/* --- LIST --- */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24 }}
        ListEmptyComponent={
            <View style={styles.emptyContainer}>
                <Ionicons name="calendar-outline" size={64} color="#E5E7EB" />
                <Text style={styles.emptyText}>No bookings here</Text>
            </View>
        }
        renderItem={({ item }) => {
          const colors = getStatusColor(item.status);
          return (
            <TouchableOpacity 
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => Alert.alert("Info", "Detail booking akan dikerjakan oleh Dimas.")}
            >
                <View style={styles.cardRow}>
                    <Image source={item.image} style={styles.cardImage} />
                    <View style={styles.cardInfo}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.hotelName} numberOfLines={1}>{item.hotel}</Text>
                            <View style={[styles.badge, { backgroundColor: colors.bg }]}>
                                <Text style={[styles.badgeText, { color: colors.text }]}>{item.status}</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.idText}>ID: {item.id}</Text>

                        {/* --- UPDATE: PRICE TAG DENGAN ICON UANG --- */}
                        <View style={styles.pricePill}>
                            <Ionicons name="cash-outline" size={14} color="#2563EB" />
                            <Text style={styles.priceText}>{item.price}</Text>
                        </View>
                        {/* ------------------------------------------ */}

                    </View>
                </View>
                
                <View style={styles.divider} />

                <View style={styles.cardFooter}>
                    <View style={styles.dateContainer}>
                        <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                    <View style={styles.detailsBtn}>
                        <Text style={styles.detailsText}>Details</Text>
                        <Ionicons name="chevron-forward" size={14} color="#999" />
                    </View>
                </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    padding: 4,
    borderRadius: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  tabText: {
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#2563EB',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  cardInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  idText: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4,
  },
  
  // --- STYLE BARU UNTUK ICON DOLAR ---
  pricePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF', // Biru sangat muda
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20, // Biar rounded kayak pil
    alignSelf: 'flex-start',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#DBEAFE', // Border biru tipis
  },
  priceText: {
    color: '#2563EB', // Teks Biru
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4, // Jarak antara icon dan teks
  },
  // -----------------------------------

  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    width: '100%',
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  dateText: {
    marginLeft: 6,
    color: '#4B5563',
    fontSize: 12,
    fontWeight: '500',
  },
  detailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: 'bold',
    marginRight: 4,
  },
});