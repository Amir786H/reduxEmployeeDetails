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
        // foodList: []
    }

    // submitFood = (food) => {
    //     this.setState(
    //         {
    //             foodList:
    //                 [...this.state.foodList, {
    //                     key: Math.random(),
    //                     name: food
    //                 }]
    //         }
    //     )
    // }


    // deleteFood = (key) => {
    //     this.setState(
    //         {
    //             foodList:
    //                 [
    //                     ...this.state.foodList.filter((item) =>
    //                         item.key !== key)
    //                 ]
    //         }
    //     )
    // }



    render() {

        // console.log(this.state.foodList);

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Redux</Text>
                <TextInput
                    value={this.state.foods}
                    placeholder='Name'
                    style={styles.foodInput}
                    onChangeText={(food) => this.setState({ food })}
                />
                <Button title='Submit'
                    color='black'
                    onPress={() => this.props.add(this.state.food)}
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
        justifyContent: 'center'
    },
    title: {
        fontSize: 64,
        marginBottom: 48
    },
    foodInput: {
        fontSize: 32,
        marginBottom: 3,
        borderWidth: 1,
        padding: 8,
        width: '80%',
        borderRadius: 10
    }
});

const mapStateToProps = (state) => {
    return {
        foods: state.foodReducer.foodList
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        add: (food) => dispatch(addFood(food))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);