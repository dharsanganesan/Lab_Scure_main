import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from "react-native";

export default function PhysicsLabScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const mockData = [
        { 
          _id: "1",
          parameter: "Radiation Levels", 
          value: "0.05 μSv", 
          status: "Safe", 
          note: "Within normal background range",
          icon: "☢️"
        },
        { 
          _id: "2",
          parameter: "Laser Safety", 
          value: "Class 3B", 
          status: "Warning", 
          note: "Requires protective eyewear",
          icon: "👁️"
        },
        { 
          _id: "3",
          parameter: "EM Field Strength", 
          value: "2.1 mG", 
          status: "Safe",
          note: "Below safety threshold",
          icon: "🧲"
        },
        { 
          _id: "4",
          parameter: "Cryogenics", 
          value: "Proper storage", 
          status: "Safe",
          note: "All containers secured",
          icon: "❄️"
        },
        { 
          _id: "5",
          parameter: "Equipment Temp", 
          value: "38°C", 
          status: "Caution",
          note: "Monitor for overheating",
          icon: "🌡️"
        }
      ];
      await new Promise(resolve => setTimeout(resolve, 800));
      setData(mockData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "safe": return "#10B981"; // Green
      case "caution": return "#F59E0B"; // Amber
      case "warning": return "#EF4444"; // Red
      default: return "#6B7280"; // Gray
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.icon}>{item.icon}</Text>
        <View style={styles.parameterContainer}>
          <Text style={styles.parameter}>{item.parameter}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.value}>{item.value}</Text>
      
      {item.note && (
        <View style={styles.noteContainer}>
          <Text style={styles.note}>{item.note}</Text>
        </View>
      )}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text style={styles.loadingText}>Loading physics lab data...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2563EB" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Physics Lab Safety</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{data.length}</Text>
          <Text style={styles.statLabel}>Parameters</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, {color: "#10B981"}]}>
            {data.filter(item => item.status === "Safe").length}
          </Text>
          <Text style={styles.statLabel}>Safe</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, {color: "#F59E0B"}]}>
            {data.filter(item => item.status === "Caution").length}
          </Text>
          <Text style={styles.statLabel}>Caution</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, {color: "#EF4444"}]}>
            {data.filter(item => item.status === "Warning").length}
          </Text>
          <Text style={styles.statLabel}>Warning</Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 16,
    paddingTop:40
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 30,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },
  loadingText: {
    marginTop: 16,
    color: "#6B7280",
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  parameterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  parameter: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  statusBadge: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  value: {
    fontSize: 15,
    color: "#4B5563",
    marginBottom: 8,
  },
  noteContainer: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    padding: 12,
  },
  note: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
});