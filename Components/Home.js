import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerButtonContainer}>
                    <Button title="Add Post" onPress={() => navigation.navigate('AddPost')} />
                    <View style={styles.spacer} /> 
                    <Button title="Details" onPress={() => navigation.navigate('Details')} />
                    <View style={styles.spacer} />
                    <Button title="ToDo" onPress={() => navigation.navigate('ToDo')} />
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    headerButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10, 
    },
    spacer: {
        width: 10, 
    },
});