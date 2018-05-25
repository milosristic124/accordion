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
  ActivityIndicator,
  Animated
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
            expanded: true,
            animation   : new Animated.Value()
        }
    }
    
    componentDidMount() {
        
    }
    dropdownPress() {
        // if(this.state.isDropdownPressed){
        //     this.setState({
        //         isDropdownPressed: false,
        //      //   animation: "fadeInUp"
        //     })
        // } else {
        //     this.setState({
        //         isDropdownPressed: true,
        //     //    animation: "fadeInDown"
        //     })
        // }
        //this.summary.pulse(800);
        //this.category.pulse(800);
       // console.log('Pressed', this.state.isDropdownPressed);
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded  //Step 2
    });

    this.state.animation.setValue(initialValue);  //Step 3
    Animated.spring(     //Step 4
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();  //Step 5
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
    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }
    render() {
        return (
            <Animated.View style={{  overflow:'hidden', height: this.state.animation}}>
                <View 
                    // ref={(ref) => {
                    //     this.summary = ref;
                    // }}
                    onLayout={this._setMinHeight.bind(this)}
                    style={styles.summaryGroups}
                    
                >
                    <View style={styles.summaryGroupsLeft}>
                        <Text style={styles.summaryGroupsText}>{this.props.index.label}</Text>
                    </View>   
                    <View style={styles.summaryGroupsRight}>
                        <Text style={styles.summaryGroupsText}>{this.props.index.count}</Text>
                        { this.props.index.count > 1 ? 
                            <TouchableOpacity onPress={ this.dropdownPress.bind(this) }>
                                <Image style={styles.dropImage} source={ !this.state.expanded ? require('../assets/dropdown.png') : require('../assets/dropdown-expanded.png')}/>                                 
                            </TouchableOpacity>: 
                            <Image style={{ width: 16, height: 16 }}source={null}/>}
                    </View>
                </View>
                <View
                    // ref={(ref) => {
                    //     this.subgroups = ref;
                    // }}
                   // animation={this.state.animation}
                   onLayout={this._setMaxHeight.bind(this)}
                >
                { this.renderItem() }                
                </View>
            </Animated.View>
        );
    }
}

export default Summary;

