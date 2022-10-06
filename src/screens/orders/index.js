import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const Products = ({ navigation  }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Uh-oh... Aún no hay ordenes</Text>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Categories")}>
            <View>
                <Image
                source={require('../../../assets/img/oh.png')}
                style={{width: 300, height: 300, marginBottom:20,}}
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Volver
                </Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};

export default Products;