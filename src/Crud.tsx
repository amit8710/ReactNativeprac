import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";


function Crud() {
    const [task, setTask] = useState<string>("");
    const [taskPriority, setTaskPriority] = useState<string>("High");
    const [tasks, setTasks] = useState<{ task: string; priority: string }[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [showDatePicker, setshowDatePicker] = useState(false);

    const handleAddTask = () => {
        if (task.trim()) {
            if (editIndex !== null) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = { task, priority: taskPriority };
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, { task, priority: taskPriority }]);
            }
            setTask("");
            setTaskPriority("Medium"); 
        }
    };

    const handleEditTask = (index: number) => {
        setTask(tasks[index].task);
        setTaskPriority(tasks[index].priority);
        setEditIndex(index);
    };

    const handleDeleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const renderItem = ({ item, index }: { item: { task: string; priority: string }; index: number }) => {
        let priorityColor;
        switch (item.priority) {
            case "Low":
                priorityColor = "#23bb3f";
                break;
            case "Medium":
                priorityColor = "#1aaef3";
                break;
            case "High":
                priorityColor = "#ea340b";
                break;
            default:
                priorityColor = "#ffc107";
        }
        return (
            <View style={[styles.task, { borderColor: priorityColor }]}>
                <Text style={styles.itemList}>{item.task}</Text>
                <View style={styles.taskButton}>
                    <TouchableOpacity onPress={() => handleEditTask(index)}>
                        <Text style={styles.editButton}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                        <Text style={styles.deleteButton}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task To-Do</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task..."
                value={task}
                onChangeText={setTask}
            />
            <View style={styles.priorityContainer}>
                <Text style={styles.priorityLabel}>Set Priority</Text>
                <Picker
                    selectedValue={taskPriority}
                    style={styles.priorityPicker}
                    onValueChange={(itemValue) => setTaskPriority(itemValue)}
                >
                    <Picker.Item label="Low" value="Low" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="High" value="High" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Text style={styles.addButtonText}>
                    {editIndex !== null ? "Update Task" : "Add Task"}
                </Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
}

export default Crud;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    priorityContainer: {
        marginBottom: 10,
        width: "100%",
    },
    priorityLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    priorityPicker: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    addButton: {
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    task: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth: 3, 
    },
    itemList: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    taskButton: {
        flexDirection: "row",
    },
    editButton: {
        color: "#28a745",
        fontSize: 16,
        marginRight: 10,
        fontWeight: "bold",
    },
    deleteButton: {
        color: "#dc3545",
        fontSize: 16,
        fontWeight: "bold",
    },
});