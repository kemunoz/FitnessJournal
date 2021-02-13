import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const IndexScreen = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [retypedpassword, setPasswordCheck] = useState('');

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
            <Text style={styles.label}>Re-Type Password:</Text>
            <TextInput
                value={retypedpassword}
                onChangeText={text => setPasswordCheck(text)}
                style={styles.input}
            />

            <Button
                title="Log In"
                onPress={() => retypedpassword === password ? console.log(true) : console.log(false)}
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