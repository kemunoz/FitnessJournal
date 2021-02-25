import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Context from '../context/FitnessContext';

const Workout = () => {

    const { state } = useContext(Context);
    console.log(state);

    return (
        <View>

        </View>
    )
};

export default Workout;