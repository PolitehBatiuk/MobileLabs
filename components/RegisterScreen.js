import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleRegister = () => {
    console.log('Реєстрація виконана');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Електронна пошта</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Введіть вашу електронну пошту"
          placeholderTextColor="#CCCCCC"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Введіть ваш пароль"
          placeholderTextColor="#CCCCCC"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль (ще раз)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Підтвердіть ваш пароль"
          placeholderTextColor="#CCCCCC"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Прізвище</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          placeholder="Ваше прізвище"
          placeholderTextColor="#CCCCCC"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ім'я</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
          placeholder="Ваше ім'я"
          placeholderTextColor="#CCCCCC"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#262525'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: 'white',
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: '#CCCCCC',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#1E90FF',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default RegisterScreen;
