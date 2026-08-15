import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const nombre = "Jhonny";

  const saludar = (nombre) => {
    return `Hola ${nombre}, bienvenido a React Native`;
  };

  const edad = 20;

  const tareas = [
    {
      id: 1,
      nombre: "Estudiar React Native",
    },
    {
      id: 2,
      nombre: "Realizar la tarea",
    },
    {
      id: 3,
      nombre: "Practicar programacion",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        EJERCICIOS DE REACT NATIVE
      </Text>

      <Text style={styles.text}>
        {saludar(nombre)}
      </Text>

      <Text style={styles.text}>
        Nombre: {nombre}
      </Text>

      <Text style={styles.text}>
        Edad: {edad}
      </Text>

      <Text style={styles.text}>
        {edad >= 18 ? "Mayor de edad" : "Menor de edad"}
      </Text>

      <Text style={styles.subtitle}>
        Lista de tareas
      </Text>

      <View>
        {tareas.map((tarea) => (
          <Text key={tarea.id} style={styles.task}>
            {tarea.id}. {tarea.nombre}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  text: {
    fontSize: 17,
    marginBottom: 8,
  },

  task: {
    fontSize: 17,
    marginBottom: 8,
  },
});