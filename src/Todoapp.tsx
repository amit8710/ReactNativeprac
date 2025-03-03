import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, deleteTodo, editTodo } from "../redux/todoSlice";

function Todoapp() {
    const [task, setTask] = useState<string>("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.todo.todos);

    const handleAddOrUpdateTask = () => {
        if (editIndex !== null) {
            dispatch(editTodo({ id: editIndex, text: task }));
            setEditIndex(null);
        } else {
            dispatch(addTodo(task));
        }
        setTask("");
    };

    const handleEditTask = (index: number) => {
        setTask(todo[index].text);
        setEditIndex(todo[index].id);
    };

    const handleDeleteTask = (index: number) => {
        dispatch(deleteTodo(index));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task..."
                value={task}
                onChangeText={setTask} />
            <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateTask}>
                <Text style={styles.addButtonText}>{editIndex !== null ? "Update Task" : "Add Task"}</Text>
            </TouchableOpacity>

            <FlatList
                data={todo}
                renderItem={({ item, index }) => (
                    <View style={styles.task}>
                        <Text style={styles.itemList}>{item.text}</Text>
                        <View style={styles.taskButton}>
                            <TouchableOpacity onPress={() => handleEditTask(index)}>
                                <Text style={styles.editButton}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                                <Text style={styles.deleteButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()} />
        </View>
    );
}

export default Todoapp; // Move this line outside the function

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        elevation: 2,
    },
    itemList: {
        fontSize: 16,
        flex: 1,
    },
    taskButton: {
        flexDirection: "row",
        gap: 10,
    },
    editButton: {
        backgroundColor: "#28a745",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});