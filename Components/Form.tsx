import React, { useState } from "react";
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    FlatList
} from "react-native";

const Form: React.FC = () => {
    // Define state types
    const [formData, setFormData] = useState<{ 
        name: string; 
        age: string; 
        dob: string; 
        email: string; 
        passwords: string;
    }>({
        name: "",
        age: "",
        dob: "",
        email: "",
        passwords: ""
    });

    // Store submitted details
    const [submittedData, setSubmittedData] = useState<
        { name: string; age: string; dob: string; email: string }[]
    >([]);

    // Handle Input Change
    const handleChange = (key: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    // Handle Submit
    const handleSubmit = () => {
        if (formData.name && formData.age && formData.dob && formData.email) {
            setSubmittedData([...submittedData, formData]); // Save to list
            setFormData({ name: "", age: "", dob: "", email: "", passwords: "" }); // Reset form
        } else {
            alert("Please fill all fields before submitting.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add the Details</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChangeText={(text) => handleChange("name", text)}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Age"
                    keyboardType="numeric"
                    value={formData.age}
                    onChangeText={(text) => handleChange("age", text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Date of Birth"
                    value={formData.dob}
                    onChangeText={(text) => handleChange("dob", text)}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Email"
                    value={formData.email}
                    keyboardType="email-address"
                    onChangeText={(text) => handleChange("email", text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    value={formData.passwords}
                    secureTextEntry
                    onChangeText={(text) => handleChange("passwords", text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

            {/* Show Submitted Data */}
            {submittedData.length > 0 && (
                <View style={styles.listContainer}>
                    <Text style={styles.listHeader}>Submitted Details</Text>
                    <FlatList
                        data={submittedData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text style={styles.listText}>👤 Name: {item.name}</Text>
                                <Text style={styles.listText}>🎂 Age: {item.age}</Text>
                                <Text style={styles.listText}>📅 DOB: {item.dob}</Text>
                                <Text style={styles.listText}>✉️ Email: {item.email}</Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    listContainer: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
    listHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    listText: {
        fontSize: 16,
    },
});

export default Form;
