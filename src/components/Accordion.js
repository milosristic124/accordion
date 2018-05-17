import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import Panel from './Panel';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropDownPressed: false,
        }
        this.onCategoryPress = this.onCategoryPress.bind(this);
    }
    
    componentDidMount() {
        console.log('Data-->', this.props.data);
    }
    onCategoryPress(value) {
        console.log(value);
    }
    renderItem() {
        return this.props.data.map(function(index, i){
          return(
            <View key={i}>
                <Panel index={index}/>
            </View>
          );
        });
    }
    render() {
        return (
                <View style={styles.categoryContainer}>
                    {this.renderItem()}                    
                </View>
            
        );
    }
}

export default Accordion;

