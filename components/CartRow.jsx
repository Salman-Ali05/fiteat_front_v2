import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../contexts/CartContext';

const CartRow = ({ id, title, discount, image }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                {discount && <Text style={styles.discount}>{discount}</Text>}
            </View>

            <TouchableOpacity onPress={() => removeFromCart(id)}>
                <Ionicons name="trash-outline" size={24} color="#FF0000" />
            </TouchableOpacity>
        </View>
    );
};

export default CartRow;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    details: {
        flex: 1,
        marginLeft: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    discount: {
        color: '#FFB340',
        fontSize: 14,
    },
});
