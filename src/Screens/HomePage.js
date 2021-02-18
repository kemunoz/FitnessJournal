import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/FitnessContext';

const HomePage = () => {
    const { state } = useContext(Context);

    return <View>
        <Text>Hello</Text>
        <Text>{state.userid}</Text>
    </View>
}

const styles = StyleSheet.create({});


export default HomePage;