import React from "react";
import { FlatList, View } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { categories } from "../../constants/data";

const Categories = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, categoryId: item.id });
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
    return (

            <FlatList 
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.containerList}
            />

    )
};

export default Categories;