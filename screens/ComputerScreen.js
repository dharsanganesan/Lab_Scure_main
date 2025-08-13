import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Modal,
  ScrollView
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ComputerLabScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attendanceModalVisible, setAttendanceModalVisible] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const mockData = [
        { 
          _id: "1",
          parameter: "Eye Strain Risk", 
          value: "Moderate", 
          status: "Warning", 
          note: "Take regular breaks every 30 minutes",
          icon: "👁️"
        },
        { 
          _id: "2",
          parameter: "Posture Alert", 
          value: "2 warnings", 
          status: "Caution", 
          note: "Adjust chair height and monitor position",
          icon: "🧍"
        },
        { 
          _id: "3",
          parameter: "Electrical Safety", 
          value: "Optimal", 
          status: "Safe",
          note: "All equipment properly grounded",
          icon: "🔌"
        },
        { 
          _id: "4",
          parameter: "Air Quality", 
          value: "CO₂: 800ppm", 
          status: "Safe",
          note: "Ventilation system functioning normally",
          icon: "💨"
        },
        { 
          _id: "5",
          parameter: "Emergency Exits", 
          value: "Clear", 
          status: "Safe",
          icon: "🚪"
        }
      ];
      
      const mockAttendanceData = [
        { id: 1, rollNo: "21CS001", name: "John Doe", systemNo: "PC-01", loginTime: "09:15 AM", logoutTime: "11:45 AM" },
        { id: 2, rollNo: "21CS002", name: "Jane Smith", systemNo: "PC-02", loginTime: "09:20 AM", logoutTime: "11:50 AM" },
        { id: 3, rollNo: "21CS003", name: "Alex Johnson", systemNo: "PC-03", loginTime: "09:10 AM", logoutTime: "11:40 AM" },
        { id: 4, rollNo: "21CS004", name: "Sarah Williams", systemNo: "PC-04", loginTime: "09:25 AM", logoutTime: "-" },
        { id: 5, rollNo: "21CS005", name: "Michael Brown", systemNo: "-", loginTime: "-", logoutTime: "-" },
      ];
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setData(mockData);
      setAttendanceData(mockAttendanceData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "safe": return "#10B981"; // Green
      case "caution": return "#F59E0B"; // Yellow
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

  const renderAttendanceItem = ({ item }) => (
    <View style={styles.attendanceRow}>
      <Text style={styles.attendanceCell}>{item.id}</Text>
      <Text style={styles.attendanceCell}>{item.rollNo}</Text>
      <Text style={styles.attendanceCell}>{item.name}</Text>
      <Text style={styles.attendanceCell}>{item.systemNo}</Text>
      <Text style={styles.attendanceCell}>{item.loginTime}</Text>
      <Text style={styles.attendanceCell}>{item.logoutTime}</Text>
    </View>
  );

  const presentStudents = attendanceData.filter(student => student.loginTime !== "-").length;
  const absentStudents = attendanceData.filter(student => student.loginTime === "-").length;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text style={styles.loadingText}>Loading computer lab safety data...</Text>
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
        <Text style={styles.headerTitle}>Computer Lab Safety</Text>
        <TouchableOpacity 
          onPress={() => setAttendanceModalVisible(true)}
          style={styles.menuButton}
        >
          <MaterialIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
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
      
      {/* Attendance Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={attendanceModalVisible}
        onRequestClose={() => setAttendanceModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              onPress={() => setAttendanceModalVisible(false)}
              style={styles.modalBackButton}
            >
              <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Lab Attendance</Text>
          </View>
          
          <View style={styles.attendanceSummary}>
            <View style={styles.staffInfo}>
              <Text style={styles.staffName}>Prof. David Wilson</Text>
              <Text style={styles.staffPhone}>+1 (555) 123-4567</Text>
            </View>
            
            <View style={styles.attendanceStats}>
              <View style={styles.attendanceStatItem}>
                <Text style={styles.attendanceStatValue}>{attendanceData.length}</Text>
                <Text style={styles.attendanceStatLabel}>Total Students</Text>
              </View>
              <View style={styles.attendanceStatItem}>
                <Text style={[styles.attendanceStatValue, {color: "#10B981"}]}>{presentStudents}</Text>
                <Text style={styles.attendanceStatLabel}>Present</Text>
              </View>
              <View style={styles.attendanceStatItem}>
                <Text style={[styles.attendanceStatValue, {color: "#EF4444"}]}>{absentStudents}</Text>
                <Text style={styles.attendanceStatLabel}>Absent</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.attendanceTableHeader}>
            <Text style={styles.tableHeaderCell}>S.No</Text>
            <Text style={styles.tableHeaderCell}>Roll No</Text>
            <Text style={styles.tableHeaderCell}>Name</Text>
            <Text style={styles.tableHeaderCell}>System No</Text>
            <Text style={styles.tableHeaderCell}>Login</Text>
            <Text style={styles.tableHeaderCell}>Logout</Text>
          </View>
          
          <FlatList
            data={attendanceData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderAttendanceItem}
            contentContainerStyle={styles.attendanceListContent}
          />
        </SafeAreaView>
      </Modal>
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
    paddingTop: 40
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 30,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    textAlign: 'center',
    marginLeft: -30, // To center the title properly
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 16,
    paddingTop: 40
  },
  modalBackButton: {
    marginRight: 16,
  },
  modalTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    textAlign: 'center',
    marginLeft: -40, // To center the title properly
  },
  attendanceSummary: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  staffInfo: {
    marginBottom: 16,
  },
  staffName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  staffPhone: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  attendanceStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  attendanceStatItem: {
    alignItems: "center",
    flex: 1,
  },
  attendanceStatValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
  },
  attendanceStatLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  attendanceTableHeader: {
    flexDirection: "row",
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  tableHeaderCell: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 12,
  },
  attendanceListContent: {
    paddingBottom: 20,
  },
  attendanceRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  attendanceCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#4B5563",
  },
});