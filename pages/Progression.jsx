import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';

const screenWidth = Dimensions.get('window').width;

const activityStats = [
    { day: 'Lun', minutes: 30 },
    { day: 'Mar', minutes: 45 },
    { day: 'Mer', minutes: 20 },
    { day: 'Jeu', minutes: 60 },
    { day: 'Ven', minutes: 40 },
    { day: 'Sam', minutes: 50 },
    { day: 'Dim', minutes: 35 },
];

const orderStats = [
    { name: 'Repas Fit', quantity: 3, color: '#FFB340', legendFontColor: '#fff', legendFontSize: 12 },
    { name: 'Boissons', quantity: 2, color: '#4169E1', legendFontColor: '#fff', legendFontSize: 12 },
    { name: 'Snacks', quantity: 1, color: '#00C851', legendFontColor: '#fff', legendFontSize: 12 },
];

const orderHistory = [
    { id: '1', date: '01/08/2025', item: 'Repas Fit', price: '12.99€' },
    { id: '2', date: '03/08/2025', item: 'Boisson protéinée', price: '3.50€' },
    { id: '3', date: '07/08/2025', item: 'Snack healthy', price: '5.99€' },
];

const Progression = () => {
    return (
        <View style={styles.container}>
            <TopMenu />
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.title}>Votre progression</Text>

                <Text style={styles.subtitle}>⏱️ Temps d'entraînement cette semaine</Text>
                <BarChart
                    data={{
                        labels: activityStats.map((item) => item.day),
                        datasets: [{ data: activityStats.map((item) => item.minutes) }],
                    }}
                    width={screenWidth - 40}
                    height={220}
                    yAxisSuffix=" min"
                    chartConfig={chartConfig}
                    style={styles.chart}
                />

                <Text style={styles.subtitle}>🛒 Répartition des commandes</Text>
                <PieChart
                    data={orderStats}
                    width={screenWidth - 40}
                    height={180}
                    chartConfig={chartConfig}
                    accessor="quantity"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    center={[0, 0]}
                />

                <Text style={styles.subtitle}>📦 Historique de commandes</Text>
                <View>
                    {orderHistory.map((item) => (
                        <View key={item.id} style={styles.historyItem}>
                            <Text style={styles.historyText}>{item.date} - {item.item}</Text>
                            <Text style={styles.historyPrice}>{item.price}</Text>
                        </View>
                    ))}
                </View>


            </ScrollView>
            <BotMenu />
        </View>
    );
};

export default Progression;

const chartConfig = {
    backgroundGradientFrom: '#1E1E1E',
    backgroundGradientTo: '#1E1E1E',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: () => '#fff',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        color: '#FFB340',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    chart: {
        borderRadius: 10,
    },
    historyItem: {
        backgroundColor: '#2A2A2A',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    historyText: {
        color: '#fff',
        fontSize: 14,
    },
    historyPrice: {
        color: '#FFB340',
        fontWeight: 'bold',
    },
});
