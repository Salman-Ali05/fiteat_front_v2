import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotMenu from '../components/BotMenu';

const HomeMenu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Progression')}>
                <Text style={styles.buttonText}>📈 Voir ma progression</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.buttonText, styles.logoutText]}>🚪 Se déconnecter</Text>
            </TouchableOpacity>

            <BotMenu />
        </View>
    );
};

export default HomeMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#FFB340',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#1E1E1E',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#2A2A2A',
    },
    logoutText: {
        color: '#FF6B6B',
    },
});
