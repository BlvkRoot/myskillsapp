import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function SkillCard() {
    return (
        <TouchableOpacity style={styles.skillBtn} key={index}>
            <Text style={styles.skillText}>
                { skill }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skillBtn: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 15
    },
    skillText: {
        color: '#fff',
        fontSize: 22,
    }
});