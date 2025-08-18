import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import CartRow from '../components/CartRow';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const totalAmount = cartItems.reduce((acc, item) => {
        const numericPrice = parseFloat(
            typeof item.price === 'string' ? item.price.replace(',', '.') : item.price
        );

        return acc + numericPrice * item.quantity;
    }, 0);

    const handleConfirmOrder = () => {
        Alert.alert("Commande confirmée");
    };

    const renderEmptyCart = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>🛒 Votre panier est vide</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TopMenu />

            <View style={styles.content}>
                {cartItems.length === 0 ? (
                    renderEmptyCart()
                ) : (
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item, index) => item.id || index.toString()}
                        renderItem={({ item }) => (
                            <CartRow
                                id={item.id}
                                title={item.title}
                                discount={item.discount}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                            />

                        )}
                        contentContainerStyle={styles.listContainer}
                    />
                )}

                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: {totalAmount.toFixed(2)} €</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
                    <Text style={styles.buttonText}>Valider la commande</Text>
                </TouchableOpacity>

            </View>

            <BotMenu />
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    content: {
        flex: 1,
        marginBottom: 60,
        backgroundColor: '#FFB340',
        borderRadius: 10,
        padding: 15,
    },
    totalContainer: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    totalText: {
        fontSize: 16,
        color: '#1E1E1E',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 20,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#1E1E1E',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
    },
    button: {
        width: '100%',
        backgroundColor: '#333',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
