import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/FitnessContext';

const IndexScreen = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Username:</Text>
            <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Password:</Text>
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
            />

            <Button
                title="Log In"
                onPress={() => login(user, password, () => navigation.navigate('Home'))}
            />
            <Button
                title="Sign up"
                onPress={() => console.log('sign up')}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default IndexScreen;