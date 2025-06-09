import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-paper';

const CartRow = ({ title, discount, image }) => {

    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />

            <Icon name="heart" size={18} color="red" style={styles.favoriteIcon} />
            <Text style={styles.mealTitle}>{title}</Text>
            {discount && (
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{discount}</Text>
                </View>
            )}
        </View>
    );
};

export default CartRow;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 15,
        margin: 5,
        minHeight: 120,
        position: 'relative',
        justifyContent: 'flex-end',
        borderRadius: 10,
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 0.61)',
        borderRadius: 15
    },
    favoriteIcon: {
    },
    mealTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    discountBadge: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#000',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 25,
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
