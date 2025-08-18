import { View, FlatList, StyleSheet } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import MealCard from '../components/MealCard';

const meals = [
    {
        id: '1',
        title: 'Poulet Campagnard aux Pommes de Terre et Sauce Maison',
        image: require('../assets/food1.jpg'),
        discount: null,
        price : '12,99',
    },
    {
        id: '2',
        title: 'Filet de Poisson Pané aux Saveurs Méditerranéennes',
        image: require('../assets/food2.jpg'),
        discount: null,
        price : '12,99',
    },
    {
        id: '3',
        title: 'Mijoté de Bœuf aux Saveurs Rustiques',
        image: require('../assets/food1.jpg'),
        discount: null,
        price : '12,99',
    },
    {
        id: '4',
        title: 'Trios savoureux',
        image: require('../assets/food2.jpg'),
        discount: '-25%',
        price : '24,99',
    },
];

const OrdersHome = () => {
    return (
        <View style={styles.container}>
            <TopMenu />

            <View style={styles.content}>

                <FlatList
                    data={meals}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => <MealCard id={item.id} title={item.title} discount={item.discount} image={item.image} price={item.price} />}
                    contentContainerStyle={styles.listContainer}
                />

            </View>

            <BotMenu />
        </View>
    );
};

export default OrdersHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    content: {
        flex: 1,
        marginBottom: 60,
    },
    listContainer: {
        paddingBottom: 20,
    },
});
