import 'react-native-gesture-handler';

import * as React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FoodForm from './src/foodForm';
import FoodList from './src/foodList';



const Stack = createStackNavigator();


function App() {

    createHomeStack = () =>

        <Stack.Navigator>

            <Stack.Screen name="Home" component={FoodForm} initialRouteName={FoodForm} />
            <Stack.Screen name="FoodList" component={FoodList} />

        </Stack.Navigator>


    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Home" component={FoodForm} initialRouteName={FoodForm} />
                <Stack.Screen name="FoodList" component={FoodList} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        textAlign: 'center',
        margin: 12,
        fontSize: 22,
        fontWeight: "100",
    },

});

export default App;