import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const Exampletable: React.FC = () => {
    return (
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Email</DataTable.Title>
          </DataTable.Header>
    
          <DataTable.Row>
            <DataTable.Cell>Amit</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>amit@gmail.com</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Dawa</DataTable.Cell>
            <DataTable.Cell>2</DataTable.Cell>
            <DataTable.Cell>Dawa@gamil.com</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Suman</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell>Suman@gmail.com</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Pradip</DataTable.Cell>
            <DataTable.Cell>4</DataTable.Cell>
            <DataTable.Cell>Pradip@gamil.com</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
    );
};

export default Exampletable;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  tableHeader: {
    backgroundColor: "#E0E0E0",
    borderBottomWidth: 2,
    borderBottomColor: "#A0A0A0",
    paddingVertical: 8,
    fontWeight: "bold",
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  cellText: {
    fontSize: 14,
    color: "#333",
  },
});
