import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const BotMenu = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const cartItems = useContext(CartContext).cartItems;
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0) || 0;

    const tabs = [
        { name: 'TrainHome', icon: 'home' },
        { name: 'Activities', icon: 'barbell' },
        { name: 'Cart', icon: 'cart', badge: totalItems },
        { name: 'Menu', icon: 'person' },
    ];

    return (
        <View style={styles.navBar}>
            {tabs.map((tab) => {
                const isSelected = route.name === tab.name;

                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={[styles.navItem, isSelected && styles.navItemSelected]}
                        onPress={() => navigation.navigate(tab.name)}
                    >
                        <View style={[styles.iconWrapper, isSelected && styles.iconWrapperSelected]}>
                            <Ionicons
                                name={tab.icon}
                                size={isSelected ? 22 : 20}
                                style={[styles.icons, isSelected && styles.iconsSelected]}
                            />
                            {tab.name === 'Cart' && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{totalItems}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 55,
        backgroundColor: '#FFB340',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 10,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    navItemSelected: {
        transform: [{ translateY: -30 }],
    },
    iconWrapper: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        padding: 6,
    },
    iconWrapperSelected: {
        backgroundColor: '#FFB340',
        borderRadius: 30,
        padding: 8,
        borderWidth: 2,
        borderColor: "#FFB340",
    },
    icons: {
        color: "#1E1E1E",
    },
    iconsSelected: {
        color: "#1E1E1E",
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#E53935',
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 1,
        minWidth: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default BotMenu;
