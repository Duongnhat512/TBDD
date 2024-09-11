import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const charactersLength = characters.length;
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
}

function PassGenerator() {
    const [password, setPassword] = useState('');

    return (
        <View
            style={styles.container}
        >
            <Text
                style={{
                    color: '#fff',
                    fontSize: 25,
                    width: '40%',
                    textAlign: 'center',
                    marginBottom: 50,
                }}
            >
                PASSWORD GENERATOR
            </Text>
            <Text
                style={styles.outputPass}
            >
                {password}
            </Text>
            <View
                style={styles.choiceSite}
            >
                <Text style={styles.text}>
                    Password length
                </Text>

                <TextInput
                    style={{
                        height: 33,
                        backgroundColor: '#FFFFFF',
                        width: "40%",
                    }}
                />
            </View>
            <View
                style={styles.choiceSite}
            >
                <Text style={styles.text}>
                    Include lower case letters
                </Text>

                <TextInput
                    style={styles.input}
                />
            </View>
            <View
                style={styles.choiceSite}
            >
                <Text style={styles.text}>
                    Include upcase letters
                </Text>

                <TextInput
                    style={styles.input}
                />
            </View>
            <View
                style={styles.choiceSite}
            >
                <Text style={styles.text}>
                    Include number
                </Text>

                <TextInput
                    style={styles.input}
                />
            </View>
            <View
                style={styles.choiceSite}
            >
                <Text style={styles.text}>
                    Include special symbol
                </Text>

                <TextInput
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setPassword(generatePassword(12));
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                    }}
                >
                    GENERATE PASSWORD
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23235B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    outputPass: {
        backgroundColor: '#151537',
        width: '90%',
        height: 55,
        padding: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    input: {
        height: 33,
        backgroundColor: '#FFFFFF',
        width: 35,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    choiceSite: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#3B3B98",
        width: '80%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PassGenerator;