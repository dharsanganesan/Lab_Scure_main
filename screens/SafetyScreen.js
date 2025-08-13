<<<<<<< HEAD
import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView 
} from "react-native";

const SafetyScreen = ({ navigation }) => {
  const labs = [
    { 
      name: "Chemistry Lab", 
      screen: "Chemistry", 
      icon: require("../assets/flask.png"),
      overview: "Chemical storage and handling safety monitoring",
      ventilation: { status: "optimal", level: "92%", lastChecked: "2 mins ago" },
      hazards: ["Chemical exposure", "Flammable materials"]
    },
    { 
      name: "Physics Lab", 
      screen: "Physics", 
      icon: require("../assets/physics.png"),
      overview: "Radiation and equipment safety systems",
      ventilation: { status: "warning", level: "78%", lastChecked: "5 mins ago" },
      hazards: ["Radiation levels", "Laser safety"]
    },
    { 
      name: "Computer Lab", 
      screen: "Computer", 
      icon: require("../assets/computer.png"),
      overview: "Ergonomic and electrical safety monitoring",
      ventilation: { status: "optimal", level: "95%", lastChecked: "1 min ago" },
      hazards: ["Eye strain", "Posture alerts"]
    },
  ];

  const getVentilationColor = (status) => {
    switch(status.toLowerCase()) {
      case "optimal": return "#10b981";
      case "warning": return "#f59e0b";
      case "critical": return "#ef4444";
      default: return "#64748b";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lab Safety Monitoring</Text>
        <Text style={styles.subHeader}>Real-time ventilation and hazard status</Text>
      </View>

      <View style={styles.cardsContainer}>
        {labs.map((lab) => (
          <TouchableOpacity
            key={lab.name}
            style={styles.card}
            onPress={() => navigation.navigate(lab.screen)}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <Image source={lab.icon} style={styles.icon} />
              <View>
                <Text style={styles.cardTitle}>{lab.name}</Text>
                <Text style={styles.cardSubtitle}>{lab.overview}</Text>
              </View>
            </View>
            
            {/* Ventilation Status Bar */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>VENTILATION STATUS</Text>
              <View style={styles.ventilationContainer}>
                <View style={[
                  styles.ventilationPill,
                  { backgroundColor: getVentilationColor(lab.ventilation.status) }
                ]}>
                  <Text style={styles.ventilationText}>{lab.ventilation.status.toUpperCase()}</Text>
                </View>
                <Text style={styles.ventilationLevel}>{lab.ventilation.level} efficiency</Text>
                <Text style={styles.ventilationTime}>Updated {lab.ventilation.lastChecked}</Text>
              </View>
            </View>
            
            {/* Hazards List */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>ACTIVE HAZARDS</Text>
              <View style={styles.hazardsContainer}>
                {lab.hazards.map((hazard, index) => (
                  <View key={index} style={styles.hazardPill}>
                    <Text style={styles.hazardText}>{hazard}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.cardFooter}>
              <Text style={styles.viewDetails}>View Full Safety Report →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.safetyNotice}>
        <Text style={styles.noticeTitle}>VENTILATION PROTOCOLS</Text>
        <Text style={styles.noticeText}>
          Maintain minimum 80% ventilation efficiency. Immediate action required if below 60%.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  headerContainer: {
    padding: 24,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 15,
    paddingTop: 30,
    borderBottomColor: "#e2e8f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  cardsContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    tintColor: "#3b82f6",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#64748b",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  ventilationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ventilationPill: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  ventilationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  ventilationLevel: {
    fontSize: 14,
    color: "#1e293b",
    marginRight: 10,
  },
  ventilationTime: {
    fontSize: 12,
    color: "#94a3b8",
  },
  hazardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hazardPill: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  hazardText: {
    fontSize: 12,
    color: "#475569",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    paddingTop: 12,
  },
  viewDetails: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3b82f6",
    textAlign: "right",
  },
  safetyNotice: {
    backgroundColor: "#ecfdf5",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#10b981",
  },
  noticeTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#065f46",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  noticeText: {
    fontSize: 14,
    color: "#065f46",
    lineHeight: 20,
  },
});

=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
import { 
  View, 
  Text, 
  StyleSheet, 
<<<<<<< HEAD
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

const SafetyScreen = () => {
  const [activeTab, setActiveTab] = useState("chemistry");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulated data for each tab
        const mockData = {
          chemistry: [
            { _id: "1", parameter: "Chemical Exposure", value: "0.2 ppm", status: "Safe", note: "Within safe limits" },
            { _id: "2", parameter: "Flammable Materials", value: "3 containers", status: "Warning", note: "Approaching capacity" },
            { _id: "3", parameter: "Ventilation", value: "85%", status: "Safe" }
          ],
          physics: [
            { _id: "1", parameter: "Radiation Levels", value: "0.05 μSv", status: "Safe" },
            { _id: "2", parameter: "Laser Safety", value: "Class 3B", status: "Danger", note: "Requires protective eyewear" }
          ],
          computer: [
            { _id: "1", parameter: "Eye Strain", value: "Moderate", status: "Warning", note: "Take regular breaks" },
            { _id: "2", parameter: "Posture", value: "Good", status: "Safe" }
          ]
        };
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setData(mockData[activeTab] || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const renderTabButton = (tabName, displayName, icon) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        activeTab === tabName && styles.activeTab
      ]}
      onPress={() => setActiveTab(tabName)}
    >
      {icon && (
        <Image 
          source={icon} 
          style={[
            styles.tabIcon,
            activeTab === tabName && styles.activeTabIcon
          ]} 
        />
      )}
      <Text style={[
        styles.tabText,
        activeTab === tabName && styles.activeTabText
      ]}>
        {displayName}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.parameter}>{item.parameter}</Text>
        <View style={[
          styles.statusIndicator,
          { backgroundColor: getStatusColor(item.status) }
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      
      <View style={styles.valueRow}>
        <Text style={styles.valueLabel}>Current Value:</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
      
      {item.note && (
        <View style={styles.noteContainer}>
          <Text style={styles.noteLabel}>Note:</Text>
          <Text style={styles.note}>{item.note}</Text>
        </View>
      )}
    </View>
  );

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "safe":
        return "#2ecc71";
      case "warning":
        return "#f39c12";
      case "danger":
        return "#e74c3c";
      default:
        return "#95a5a6";
    }
  };

  if (loading && data.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Loading {activeTab} lab data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lab Safety Dashboard</Text>
        <Text style={styles.subHeader}>Real-time monitoring system</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {renderTabButton("chemistry", "Chemistry", require('../assets/flask.png'))}
        {renderTabButton("physics", "Physics", require('../assets/physics.png'))}
        {renderTabButton("computer", "Computer", require('../assets/computer.png'))}
      </ScrollView>

      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Lab
              </Text>
              <View style={styles.statusLegend}>
                <View style={[styles.legendItem, { backgroundColor: "#2ecc71" }]}>
                  <Text style={styles.legendText}>Safe</Text>
                </View>
                <View style={[styles.legendItem, { backgroundColor: "#f39c12" }]}>
                  <Text style={styles.legendText}>Warning</Text>
                </View>
                <View style={[styles.legendItem, { backgroundColor: "#e74c3c" }]}>
                  <Text style={styles.legendText}>Danger</Text>
                </View>
              </View>
            </View>
          }
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image 
            source={require('../assets/no-data.png')} 
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>
            No safety data available for {activeTab} lab
          </Text>
          <Text style={styles.emptySubText}>
            Check back later or contact lab administrator
          </Text>
        </View>
      )}
    </View>
=======
  TouchableOpacity, 
  Image, 
  ScrollView 
} from "react-native";

const SafetyScreen = ({ navigation }) => {
  const labs = [
    { 
      name: "Chemistry Lab", 
      screen: "Chemistry", 
      icon: require("../assets/flask.png"),
      overview: "Chemical storage and handling safety monitoring",
      ventilation: { status: "optimal", level: "92%", lastChecked: "2 mins ago" },
      hazards: ["Chemical exposure", "Flammable materials"]
    },
    { 
      name: "Physics Lab", 
      screen: "Physics", 
      icon: require("../assets/physics.png"),
      overview: "Radiation and equipment safety systems",
      ventilation: { status: "warning", level: "78%", lastChecked: "5 mins ago" },
      hazards: ["Radiation levels", "Laser safety"]
    },
    { 
      name: "Computer Lab", 
      screen: "Computer", 
      icon: require("../assets/computer.png"),
      overview: "Ergonomic and electrical safety monitoring",
      ventilation: { status: "optimal", level: "95%", lastChecked: "1 min ago" },
      hazards: ["Eye strain", "Posture alerts"]
    },
  ];

  const getVentilationColor = (status) => {
    switch(status.toLowerCase()) {
      case "optimal": return "#10b981";
      case "warning": return "#f59e0b";
      case "critical": return "#ef4444";
      default: return "#64748b";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lab Safety Monitoring</Text>
        <Text style={styles.subHeader}>Real-time ventilation and hazard status</Text>
      </View>

      <View style={styles.cardsContainer}>
        {labs.map((lab) => (
          <TouchableOpacity
            key={lab.name}
            style={styles.card}
            onPress={() => navigation.navigate(lab.screen)}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <Image source={lab.icon} style={styles.icon} />
              <View>
                <Text style={styles.cardTitle}>{lab.name}</Text>
                <Text style={styles.cardSubtitle}>{lab.overview}</Text>
              </View>
            </View>
            
            {/* Ventilation Status Bar */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>VENTILATION STATUS</Text>
              <View style={styles.ventilationContainer}>
                <View style={[
                  styles.ventilationPill,
                  { backgroundColor: getVentilationColor(lab.ventilation.status) }
                ]}>
                  <Text style={styles.ventilationText}>{lab.ventilation.status.toUpperCase()}</Text>
                </View>
                <Text style={styles.ventilationLevel}>{lab.ventilation.level} efficiency</Text>
                <Text style={styles.ventilationTime}>Updated {lab.ventilation.lastChecked}</Text>
              </View>
            </View>
            
            {/* Hazards List */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>ACTIVE HAZARDS</Text>
              <View style={styles.hazardsContainer}>
                {lab.hazards.map((hazard, index) => (
                  <View key={index} style={styles.hazardPill}>
                    <Text style={styles.hazardText}>{hazard}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.cardFooter}>
              <Text style={styles.viewDetails}>View Full Safety Report →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.safetyNotice}>
        <Text style={styles.noticeTitle}>VENTILATION PROTOCOLS</Text>
        <Text style={styles.noticeText}>
          Maintain minimum 80% ventilation efficiency. Immediate action required if below 60%.
        </Text>
      </View>
    </ScrollView>
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#f5f7fa",
  },
  headerContainer: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2c3e50",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 14,
    color: "#7f8c8d",
    textAlign: "center",
    marginTop: 4,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: "#ecf0f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: "#3498db",
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: "#7f8c8d",
  },
  activeTabIcon: {
    tintColor: "#fff",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f8c8d",
  },
  activeTabText: {
    color: "#fff",
  },
  listContent: {
    padding: 15,
    paddingBottom: 25,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c3e50",
  },
  statusLegend: {
    flexDirection: "row",
  },
  legendItem: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginLeft: 8,
  },
  legendText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
=======
    backgroundColor: "#f8fafc",
  },
  headerContainer: {
    padding: 24,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 15,
    paddingTop: 30,
    borderBottomColor: "#e2e8f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  cardsContainer: {
    padding: 16,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
<<<<<<< HEAD
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
=======
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
<<<<<<< HEAD
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  parameter: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    flex: 1,
  },
  statusIndicator: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  valueLabel: {
    fontSize: 14,
    color: "#7f8c8d",
    marginRight: 8,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34495e",
  },
  noteContainer: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
  },
  noteLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#7f8c8d",
    marginRight: 8,
  },
  note: {
    fontSize: 13,
    color: "#7f8c8d",
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
  },
  loadingText: {
    marginTop: 15,
    fontSize: 15,
    color: "#7f8c8d",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    opacity: 0.6,
  },
  emptyText: {
    fontSize: 17,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "500",
  },
  emptySubText: {
    fontSize: 14,
    color: "#bdc3c7",
    textAlign: "center",
=======
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    tintColor: "#3b82f6",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#64748b",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  ventilationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ventilationPill: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  ventilationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  ventilationLevel: {
    fontSize: 14,
    color: "#1e293b",
    marginRight: 10,
  },
  ventilationTime: {
    fontSize: 12,
    color: "#94a3b8",
  },
  hazardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hazardPill: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  hazardText: {
    fontSize: 12,
    color: "#475569",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    paddingTop: 12,
  },
  viewDetails: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3b82f6",
    textAlign: "right",
  },
  safetyNotice: {
    backgroundColor: "#ecfdf5",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#10b981",
  },
  noticeTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#065f46",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  noticeText: {
    fontSize: 14,
    color: "#065f46",
    lineHeight: 20,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
  },
});

>>>>>>> 5b03b5995b3b208cdeca7701ed8ca8cb14a98a12
export default SafetyScreen;