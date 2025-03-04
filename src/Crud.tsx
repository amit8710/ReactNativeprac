/*
Mark tasks as completed
Store tasks using AsyncStorage
*/

import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

function Crud() {
    //state define
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
//function define to add,edit,delete
    const handleAddTask = () => {
        if (task.trim()) {
            if (editIndex !== null) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = task;
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, task]);
            }
            setTask("");
        }
    };
    const handleEditTask = (index: number) =>{
        setTask(tasks[index]);
        setEditIndex(index);
    };
    const handleDeleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };
      // display the item 
    const renderItem = ({ item, index }: { item: string; index: number }) => (
        <View style={styles.task}>
            <Text style={styles.itemList}>{item}</Text>
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
// UI element 
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Task To-Do</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task..."
                value={task}
                onChangeText={setTask}
            />
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
