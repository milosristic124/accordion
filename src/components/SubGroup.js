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

import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class SubGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownPressed: false,
        }
    }
    
    componentDidMount() {
        
    }
    dropdownPress() {
        if(this.state.isDropdownPressed){
            this.setState({
                isDropdownPressed: false,
            })
        } else {
            this.setState({
                isDropdownPressed: true,
            })
        }
        
        console.log('Pressed', this.state.isDropdownPressed);
    }
    render() {
        return (
            <View>
                <View style={styles.subGroups} >
                    <View style={styles.subGroupsLeft}>
                        <Text style={styles.subGroupsText}>{this.props.index.label}</Text>
                    </View>   
                    <View style={styles.subGroupsRight}>
                        <Text style={styles.subGroupsText}>{this.props.index.count}</Text>
                        <Image style={{ width: 16, height: 16 }} source={null}/>}
                    </View>
                </View>
            </View>
        );
    }
}

export default SubGroup;

