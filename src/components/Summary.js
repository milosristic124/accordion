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

import * as Animatable from 'react-native-animatable';
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
                animation: "fadeInUp"
            })
        } else {
            this.setState({
                isDropdownPressed: true,
                animation: "fadeInDown"
            })
        }
        
        //this.subgroups.bounce(800);
        this.summary.pulse(800);
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
                <Animatable.View 
                    ref={(ref) => {
                        this.summary = ref;
                    }}
                    style={styles.summaryGroups} 
                >
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
                </Animatable.View>
                <Animatable.View
                    // ref={(ref) => {
                    //     this.subgroups = ref;
                    // }}
                    animation={this.state.animation}
                >
                { this.state.isDropdownPressed ? this.renderItem() : null }                
                </Animatable.View>
            </View>
        );
    }
}

export default Summary;

