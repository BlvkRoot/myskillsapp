import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({handleAddNewSkill}) {
    return (
        <TouchableOpacity 
            style={styles.addBtn}
            activeOpacity={0.7}
            onPress={handleAddNewSkill}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: '#A370F7',
        padding: 15,
        marginVertical: 15,
        borderRadius: 7,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});