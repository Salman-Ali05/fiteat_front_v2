import { View, FlatList, Text, StyleSheet } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import CartRow from '../components/CartRow';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

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
                                title={item.title}
                                discount={item.discount}
                                image={item.image}
                            />
                        )}
                        contentContainerStyle={styles.listContainer}
                    />
                )}
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
});
