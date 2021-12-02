import React from 'react';
import {
    View,
    Text,
    TextInput, 
    StyleSheet,
    Platform
} from 'react-native';


export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome, Henriques </Text>

            <TextInput 
                style={styles.textInput}
                placeholder="New Skill"
                placeholderTextColor="#666"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 12 : 10,
        marginTop: 30,
        borderRadius: 7
    }
});