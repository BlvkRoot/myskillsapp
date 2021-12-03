import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput, 
    StyleSheet,
    Platform,
    FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    const handleAddNewSkill = () => {
        if(newSkill) setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> 
                Welcome, Henriques 
            </Text>

            <TextInput 
                style={styles.textInput}
                placeholder="New Skill"
                placeholderTextColor="#666"
                onChangeText={setNewSkill}
            />

            <Button handleAddNewSkill={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 40}]}>
                My Skills
            </Text>

            <FlatList 
                data={mySkills}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <SkillCard skill={item}/>
                )}
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
    },
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
    },
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