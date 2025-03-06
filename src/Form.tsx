import React,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet,Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RadioButton } from "react-native-paper";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  dob: yup .string().required("Date of birth is required").matches(  /^\d{2}\/\d{2}\/\d{4}$/, "Date of birth must be in MM/DD/YYYY format" ) 
    .test("dob-valid", "Date of birth cannot be in the future", (value) => {
      const [month, day, year] = value.split("/").map(Number);
      const dob = new Date(year, month - 1, day);
      const today = new Date();
      return dob <= today;
    }),
  gender: yup.string().required("gender is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { name: any; email: any; dob: any; gender:any }) => {
    Alert.alert("Form Submitted", `Name: ${data.name}\nEmail: ${data.email}\nDOB: ${data.dob} \ngender: ${data.gender}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add the details</Text>

      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Text style={styles.label}>Date of Birth</Text>
      <Controller
        control={control}
        name="dob"
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your DOB(MM/DD/YYYY)"
            onChangeText={field.onChange}
            value={field.value}
            maxLength={10} 
          />
        )}
      />
      {errors.dob && <Text style={styles.error}>{errors.dob.message}</Text>}
      <Text style={styles.label}>Gender</Text>
      <Controller
        control={control}
        name="gender"
        render={({ field }) => (
          <View style={styles.genderContainer}>
            <View style={styles.genderOption}>
              <RadioButton
                value="male"
                status={field.value === "male" ? "checked" : "unchecked"}
                onPress={() => field.onChange("male")}
              />
              <Text>Male</Text>
            </View>
            <View style={styles.genderOption}>
              <RadioButton
                value="female"
                status={field.value === "female" ? "checked" : "unchecked"}
                onPress={() => field.onChange("female")}
              />
              <Text>Female</Text>
            </View>
            <View style={styles.genderOption}>
              <RadioButton
                value="other"
                status={field.value === "other" ? "checked" : "unchecked"}
                onPress={() => field.onChange("other")}
              />
              <Text>Other</Text>
            </View>
          </View>
        )}
      />
      {errors.gender && <Text style={styles.error}>{errors.gender.message}</Text>}
      //
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={field.onChange}
            value={field.value}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#555",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  photoContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  photoText: {
    color: "#999",
  },
  uploadButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
