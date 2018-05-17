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

import Summary from './Summary';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Panel extends Component {
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
    renderItem() {
        return this.props.index.summaryGroups.map(function(index, i){
          return(
            <View style={styles.summaryGroupsContainer} key={i}>
                <Summary index={index}/>
            </View>
          );
        });
    }
    render() {
        return (
            <View>
                <View style={styles.category} >
                    <View style={styles.categoryLeft}>
                        <Text style={styles.categoryText}>{this.props.index.category}</Text>
                    </View>   
                    <View style={styles.categoryRight}>
                        <Text style={styles.categoryText}>{this.props.index.total} / {this.props.index.allocated}</Text>
                        <TouchableOpacity onPress={ this.dropdownPress.bind(this) }>
                            <Image style={styles.dropImage} source={ !this.state.isDropdownPressed ? require('../assets/dropdown.png') : require('../assets/dropdown-expanded.png')}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                { this.state.isDropdownPressed ? this.renderItem() : null }
            </View>
        );
    }
}

export default Panel;

