import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

const SelectLocation = ({ navigation }) => {
  const [zone, setZone] = React.useState("");
  const [area, setArea] = React.useState("");
  const [zoneModalVisible, setZoneModalVisible] = React.useState(false);
  const [areaModalVisible, setAreaModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/location_pin.png')}
        style={styles.icon}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with what's happening in your area
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Zone</Text>
        <Pressable onPress={() => setZoneModalVisible(true)} style={styles.inputField}>
          <Text style={[styles.inputText, !zone && styles.placeholderText]}>
            {zone || "Select your zone"}
          </Text>
          <AntDesign name="down" size={16} color="#888" style={styles.iconRight} />
        </Pressable>
        <Modal visible={zoneModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Picker
              selectedValue={zone}
              onValueChange={(itemValue) => {
                setZone(itemValue);
                setZoneModalVisible(false);
              }}
            >
              <Picker.Item label="Select your zone" value="" />
              <Picker.Item label="Banasree" value="Banasree" />
              <Picker.Item label="Other Zone" value="Other Zone" />
            </Picker>
          </View>
        </Modal>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Area</Text>
        <Pressable onPress={() => setAreaModalVisible(true)} style={styles.inputField}>
          <Text style={[styles.inputText, !area && styles.placeholderText]}>
            {area || "Select your area"}
          </Text>
          <AntDesign name="down" size={16} color="#888" style={styles.iconRight} />
        </Pressable>
        <Modal visible={areaModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Picker
              selectedValue={area}
              onValueChange={(itemValue) => {
                setArea(itemValue);
                setAreaModalVisible(false);
              }}
            >
              <Picker.Item label="Select your area" value="" />
              <Picker.Item label="Area 1" value="Area 1" />
              <Picker.Item label="Area 2" value="Area 2" />
            </Picker>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  headerContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputText: {
    fontSize: 16,
    color: '#000',
  },
  placeholderText: {
    color: '#888',
  },
  iconRight: {
    marginRight: 10,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectLocation;