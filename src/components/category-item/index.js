import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.categories}>
                        <Text style={styles.title}>{item.title}</Text>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
            </View>
        </TouchableOpacity>
    )
}
export default CategoryItem;