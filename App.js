import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

import HomeScreen from './components/HomeScreen'
import PhotoScreen from './components/PhotoScreen'
import RegisterScreen from './components/RegisterScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerText}>FirstMobileApp</Text>
          <Image
            style={styles.logo}
            source={require('./assets/politech.png')}
          /> 
        </SafeAreaView>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const icons = {
                Головна: 'home',
                Фотогалерея: 'picture-o',
                Профіль: 'user',
              };

              return (
                <FontAwesome
                  name={icons[route.name]}
                  color={color}
                  size={20}
                />
              );
            },
          })}
          tabBarOptions={{
            showIcon: true,
            labelStyle: { fontSize: 10 },
            activeTintColor: 'gray',
            inactiveTintColor: 'white',
            style: { backgroundColor: '#171717', paddingTop: 10 }, 
            indicatorStyle: { backgroundColor: 'white' },
          }}
        >
          <Tab.Screen name="Головна" component={HomeScreen} />
          <Tab.Screen name="Фотогалерея" component={PhotoScreen} />
          <Tab.Screen name="Профіль" component={RegisterScreen} />
        </Tab.Navigator>
        <SafeAreaView style={styles.footer}>
          <Text style={styles.footerText}>
            Батюк Богдан Олександрович, ЗІПЗк-22-1
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  header: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#171717',
    paddingHorizontal: 20,
  },
  logo: {
    width: 170,
    height: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  footer: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171717',
  },
  footerText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: 'white'
  },
  
}
);
