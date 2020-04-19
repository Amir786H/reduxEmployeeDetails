import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';

class FoodList extends Component {


    static navigationOptions = {
        title: 'Food List',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'green',
        },
    };

    componentDidMount = () => {
        console.log(JSON.stringify(this.props.foods));
    }


    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }



    render() {

        // console.log(this.props.navigation.getParam('deleteFood'));

        return (
            // <View style={styles.MainContainer}>
                // <FlatList style={styles.listContainer}
                //     data={this.props.foods}
                //     keyExtractor={(item, index) => item.key.toString()}
                //     renderItem={
                //         (data) =>
                //             <ListItem style={styles.listText}
                //                 title={data.name}
                //                 bottomDivider
                //                 iconRight={<Icon
                //                     name='delete'
                //                     size={36}
                //                     onPress={() => this.props.delete(data.item.key)}
                //                 />}
                //             />
                //     }
                // />
            // </View>



            this.props.foods.map((data) =>
                <View style={styles.MainContainer}>
                    <View style={{ height: 45, width: '100%', backgroundColor: 'lightblue', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={{ textAlign: 'center' }} onPress={() => this.props.delete(data.key)}>{data.name}</Text>
                        {/* <Icon name="trash" style={{color: 'black'}}/> */}
                    </View>
                </View>
            )
        );
    }
}


const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'grey',
        padding: 16
    },
    listText: {
        fontSize: 30,
        height: 20,
        width: '100%',
        color: 'black'
    },
    MainContainer: {
        // Setting up View inside content in Vertically center.
        padding: 10,
        // margin: 10
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


const mapStateToProps = (state) => {
    alert(state);
    return {
        foods: state.foodReducer.foodList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (key) => dispatch(deleteFood(key))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList);