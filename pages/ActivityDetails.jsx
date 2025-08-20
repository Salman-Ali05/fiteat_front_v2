import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import { useRoute } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const ActivityDetails = () => {
    const route = useRoute();
    const { title, image } = route.params;

    return (
        <View style={styles.container}>
            <TopMenu />
            <BackButton />

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>{title}</Text>

                <Image source={image} style={styles.image} />

                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.description}>
                    Cet exercice est conçu pour améliorer votre condition physique, renforcer les muscles et augmenter l'endurance. Il est recommandé de réaliser 3 séries de 12 répétitions.
                </Text>

                <Text style={styles.sectionTitle}>Conseils</Text>
                <Text style={styles.description}>
                    Échauffez-vous avant, hydratez-vous bien, et maintenez une bonne posture pendant l'exécution. Si douleur, arrêtez immédiatement.
                </Text>

                <Text style={styles.sectionTitle}>Durée</Text>
                <Text style={styles.description}>10-15 minutes</Text>

                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Démarrer l'exercice</Text>
                </TouchableOpacity>
            </ScrollView>

            <BotMenu />
        </View>
    );
};

export default ActivityDetails;

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
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        color: '#FFB340',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    description: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 22,
    },
    startButton: {
        marginTop: 30,
        backgroundColor: '#FFB340',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    startButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
});
