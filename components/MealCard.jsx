import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const MealCard = ({ id, title, discount, image, price}) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id, title, discount, image, price });
  };

  return (
    <View style={[styles.card, discount && styles.cardDiscount]}>
      <Ionicons name="heart" size={18} color="red" style={styles.favoriteIcon} />

      <Image source={image} style={styles.image} />

      <Text style={styles.mealTitle}>{title}</Text>

      {discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}</Text>
        </View>
      )}

      <Text style={styles.mealPrice}>{price} €</Text>

      <TouchableOpacity style={styles.cartButton} onPress={handleAdd}>
        <Ionicons name="cart" size={18} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default MealCard;


const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#FFB340',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        minHeight: 120,
        position: 'relative',
        justifyContent: 'flex-end',
    },
    favoriteIcon: {
        position: 'absolute',
        top: 5,
        left: 5,
        zIndex: 1,
    },
    mealTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    mealPrice: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
        backgroundColor: '#333',
        width: 60,
        padding: 5,
        borderRadius: 10,
    },
    discountBadge: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#000',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    discountText: {
        color: '#FFB340',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cartButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },

});
