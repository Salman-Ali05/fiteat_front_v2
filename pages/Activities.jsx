import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import { Ionicons } from '@expo/vector-icons';

const activities = [
  { id: '1', title: 'Poids de corps', icon: 'body' },
  { id: '2', title: 'Étirement', icon: 'walk' },
  { id: '3', title: 'Maison / Salle de sport', icon: 'home' },
  { id: '4', title: 'Cardio', icon: 'heart' },
  { id: '5', title: 'HIIT', icon: 'flash' },
  { id: '6', title: 'Renforcement musculaire', icon: 'barbell' },
  { id: '7', title: 'Mobilité', icon: 'accessibility' },
  { id: '8', title: 'Yoga', icon: 'leaf' },
  { id: '9', title: 'Pilates', icon: 'ellipse-outline' },
  { id: '10', title: 'Préparation physique', icon: 'fitness' },
  { id: '11', title: 'Débutant', icon: 'happy' },
  { id: '12', title: 'Avancé', icon: 'rocket' },
  { id: '13', title: 'Gainage', icon: 'pause' },
  { id: '14', title: 'Pliométrie', icon: 'analytics' },
  { id: '15', title: 'Cross training', icon: 'pulse' },
];


const Activities = () => {
    return (
        <View style={styles.container}>

            <TopMenu />

            <View style={styles.content}>

                {/* Activités */}
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
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        marginBottom: 60,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityIcons: {
        fontSize: 35,
        color: '#1E1E1E',
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
    },
    activityText: {
        color: '#1E1E1E',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default Activities;