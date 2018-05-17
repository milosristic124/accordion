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

import SubGroup from './SubGroup';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Summary extends Component {
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
        return this.props.index.count > 1 ? this.props.index.subgroups.map(function(index, i){
          return(
            <View style={styles.subGruopsContainer} key={i}>
                <SubGroup index={index}/>
            </View>
          );
        }): null ;
    }
    render() {
        return (
            <View>
                <View style={styles.summaryGroups} >
                    <View style={styles.summaryGroupsLeft}>
                        <Text style={styles.summaryGroupsText}>{this.props.index.label}</Text>
                    </View>   
                    <View style={styles.summaryGroupsRight}>
                        <Text style={styles.summaryGroupsText}>{this.props.index.count}</Text>
                        { this.props.index.count > 1 ? 
                            <TouchableOpacity onPress={ this.dropdownPress.bind(this) }>
                                <Image style={styles.dropImage} source={ !this.state.isDropdownPressed ? require('../assets/dropdown.png') : require('../assets/dropdown-expanded.png')}/>                                 
                            </TouchableOpacity>: 
                            <Image style={{ width: 16, height: 16 }}source={null}/>}
                    </View>
                </View>
                { this.state.isDropdownPressed ? this.renderItem() : null }                
            </View>
        );
    }
}

export default Summary;

