import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const WorkoutCard = ({ title, image }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ActivityDetails', { title, image })} style={styles.cardContainer}>
            <View style={styles.card}>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default WorkoutCard;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
    card: {
        flex: 1,
        backgroundColor: '#FFB340',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 8,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        color: '#1E1E1E',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
