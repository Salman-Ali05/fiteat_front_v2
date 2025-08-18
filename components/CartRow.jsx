import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../contexts/CartContext';

const CartRow = ({ id, title, discount, image, price, quantity }) => {
    const { removeFromCart, addToCart } = useContext(CartContext);

    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />

            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity onPress={() => removeFromCart(id)}>
                        <Ionicons name="trash-outline" size={20} color="#FF0000" />
                    </TouchableOpacity>
                </View>

                {discount && <Text style={styles.discount}>{discount}</Text>}
                <Text style={styles.price}>{price} €</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => removeFromCart(id)}>
                        <Ionicons name="remove-circle-outline" size={20} color="black" />
                    </TouchableOpacity>

                    <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>

                    <TouchableOpacity onPress={() => addToCart({ id, title, discount, image, price })}>
                        <Ionicons name="add-circle-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export default CartRow;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        alignItems: 'flex-start',
    },
    image: {
        width: 80,
        height: '100%',
        borderRadius: 8,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        paddingRight: 10,
    },
    discount: {
        color: '#FFB340',
        fontSize: 14,
        marginTop: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 6,
    },
});
