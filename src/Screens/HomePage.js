import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Context } from '../context/FitnessContext';

const HomePage = ({ navigation }) => {

    const { getWorkouts, state } = useContext(Context);
    return <View>
        <Button title='Workouts' onPress={() => { getWorkouts(state.userid, state.token, () => navigation.navigate('Workout')) }} />
    </View>
}

const styles = StyleSheet.create({});


export default HomePage;