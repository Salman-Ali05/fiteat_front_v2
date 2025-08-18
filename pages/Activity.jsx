import { View, FlatList, StyleSheet, Text } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import WorkoutCard from '../components/WorkoutCard';
import { useRoute } from '@react-navigation/native';

const Activity = () => {
    const route = useRoute();
    const { activityTitle } = route.params;

    const activityWorkouts = (activityName) => {
        const workouts = [
            { id: '1', title: `${activityName} - Exo 1`, image: require('../assets/wkout1.png') },
            { id: '2', title: `${activityName} - Exo 2`, image: require('../assets/wkout2.png') },
            { id: '3', title: `${activityName} - Exo 3`, image: require('../assets/wkout3.png') },
        ];
        return workouts;
    };

    const workoutData = activityWorkouts(activityTitle);

    return (
        <View style={styles.container}>
            <TopMenu />

            <View style={styles.content}>
                <Text style={styles.activityTitle}>{activityTitle}</Text>

                <FlatList
                    data={workoutData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <WorkoutCard title={item.title} image={item.image} />
                    )}
                    contentContainerStyle={styles.listContainer}
                />
            </View>

            <BotMenu />
        </View>
    );
};

export default Activity;

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
    activityTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 5,
    },
});
