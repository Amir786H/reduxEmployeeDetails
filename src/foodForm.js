import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { addFood } from './actions/food';


class FoodForm extends Component {


    static navigationOptions = {
        title: 'Home',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'blue',
        },
    };

    state = {
        food: null,
        empName: null,
        empEmail: null,
        empPhone: null,
        empAddress: null
        // foodList: []
    }


    render() {

        // console.log(this.state.foodList);

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Employee Details</Text>

                <TextInput
                    // value={this.state.foods}
                    placeholder='Name'
                    style={styles.foodInput}
                    onChangeText={(food) => this.setState({ food })}
                />
                <TextInput
                    placeholder='Employee'
                    style={styles.foodInput}
                    onChangeText={(empName) => this.setState({ empName })}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.foodInput}
                    onChangeText={(empEmail) => this.setState({ empEmail })}
                />
                <TextInput
                    placeholder='Phone'
                    style={styles.foodInput}
                    onChangeText={(empPhone) => this.setState({ empPhone })}
                />

                <Button title='Submit'
                    color='black'
                    onPress={() => this.props.add(this.state.food +'  '+ this.state.empEmail +'  '+ this.state.empName +'  '+ this.state.empPhone)}
                    // onPress={() => this.props.add(this.state)}
                />

                <Button
                    title='Go to FoodList'
                    onPress={() =>
                        this.props.navigation.navigate('FoodList')
                    }
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 40,
        marginBottom: 35,
        justifyContent: 'flex-start'
    },
    foodInput: {
        fontSize: 22,
        marginBottom: 3,
        borderBottomWidth: 1,
        padding: 8,
        width: '80%',
        // borderRadius: 10
    }
});

const mapStateToProps = (state) => {
    return {
        foods: state.foodReducer.foodList
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        add: (state) => dispatch(addFood(state))
        // add: (empName) => dispatch(addFood(empName))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);