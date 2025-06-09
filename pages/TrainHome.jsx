import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const activities = [
    { id: '1', title: 'Warmup', icon: 'walk-outline' },
    { id: '2', title: 'Gym', icon: 'barbell-outline' },
    { id: '3', title: 'Stretch', icon: 'body-outline' },
    { id: '4', title: 'Body Workout', icon: 'fitness-outline' },
];

const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-EU', options).toUpperCase();
};


const TrainHome = () => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>

                <TopMenu />

                <Text style={styles.date}>{getCurrentDate()}</Text>
                <Text style={styles.welcomeText}>Bonjour, <Text style={styles.boldText}>Kate</Text> 👋</Text>

                <View style={styles.card}>
                    <Text style={styles.cardText}>Progression %</Text>
                    <ProgressBar progress={0.7} color="#4169E1" style={styles.progressBar} />
                </View>

                <Text style={styles.sectionTitle}>Activités d’aujourd’hui</Text>
                <FlatList
                    data={activities}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.activityCard}>
                            <Ionicons name={item.icon} style={styles.activityIcons} />
                            <Text style={styles.activityText}>{item.title}</Text>
                        </View>
                    )}
                />

            </View>

            <BotMenu />

        </View>
    );
};

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
    date: {
        color: '#bbb',
        fontSize: 14,
        marginBottom: 5,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    boldText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#FFB340',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    cardText: {
        color: '#1E1E1E',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    progressBar: {
        height: 5,
        borderRadius: 5,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 7
    },
    activityCard: {
        flex: 1,
        backgroundColor: '#FFB340',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
    },
    activityIcons: {
        fontSize: 50,
        color: '#1E1E1E',
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
    },
    activityText: {
        color: '#1E1E1E',
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold',
    }
});

export default TrainHome;
