import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

export default function Product() {
  const data = [
    { id: 1, title: "bakso", description: "Delicious meatball dish." },
    { id: 2, title: "laptop", description: "Powerful computing device." },
    { id: 3, title: "sandal", description: "Comfortable footwear." },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <View>
      <SafeAreaView />

      <Text>Product</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.flatListContainer}>
              <Text style={{ color: "white" }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal for Product Details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: 'bold' }}>{selectedProduct?.title}</Text>
          <Text style={{ color: "black" }}>{selectedProduct?.description}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "blue", marginTop: 10 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "purple",
    marginHorizontal: 16,
    marginVertical: 10,
    paddingBottom: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
