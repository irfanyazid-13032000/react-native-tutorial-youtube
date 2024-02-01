import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Product() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const token = useSelector((state)=>state.auths.token)


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const response = await axios.get('http://10.10.100.210:8088/product/page', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <View>
      <SafeAreaView />

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.flatListContainer}>
              <Text style={{ color: "white" }}>{item.productName}</Text>
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
          <Text style={{ color: "black", fontSize: 18, fontWeight: 'bold' }}>{selectedProduct?.productName}</Text>
          <Text style={{ color: "black" }}>{selectedProduct?.description}</Text>
          <Text style={{ color: "black" }}>Stock: {selectedProduct?.stock}</Text>
          <Text style={{ color: "black" }}>Price: {selectedProduct?.price}</Text>
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
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical:'bottom'
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
