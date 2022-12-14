import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { products } from "../../constants/data";

const Product = ({ navigation, route }) => {

    const { productId } = route.params;
    const product = products.find(product => product.id === productId);
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.uri }}
                style={{ width: 250, height: 250, marginStart: 70, marginTop: 8, borderRadius: 50, }}
            />
            <Text style={styles.title}>id: {product.id}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.text}>{product.description}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/img/coin2.png')}
                    style={styles.image} />
                <Text style={styles.text}>{product.price}</Text>
            </View>
            <Text style={styles.text}>Type: {product.type}</Text>

        </View>
    )
};

export default Product;