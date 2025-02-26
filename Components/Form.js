import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

class Form extends Component {
    state = {
        name: '',
        age: '',
        dob: '',
        email: '',
        passwords: ''
    };

    handleName = (text) => {
        this.setState({ name: text });
    };

    handleAge = (text) => {
        this.setState({ age: text });
    };

    handleDob = (text) => {
        this.setState({ dob: text });
    };

    handleEmail = (text) => {
        this.setState({ email: text });
    };

    handlePasswords = (text) => {
        this.setState({ passwords: text });
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Add the Details</Text>
                </View>

                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter your Name"
                        value={this.state.name}
                        onChangeText={this.handleName}
                        keyboardType="Text"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Age"
                        keyboardType="numeric"
                        value={this.state.age}
                        onChangeText={this.handleAge}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Date of Birth"
                        value={this.state.dob}
                        onChangeText={this.handleDob}
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Email"
                        value={this.state.email}
                        keyboardType="email-address"
                        onChangeText={this.handleEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Password"
                        value={this.state.passwords}
                        secureTextEntry
                        onChangeText={this.handlePasswords}
                    />

                    <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginBottom: 30,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
    },
    picker: {
        width: "100%",
        height: 40,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Form;
