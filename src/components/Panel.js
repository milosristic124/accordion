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
import Summary from './Summary';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownPressed: false,
            expanded: true,
            animation   : new Animated.Value()
        }
    }
    
    componentDidMount() {
        console.log('Num ber of Data', this.props.numberOfData);
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
        return this.props.index.summaryGroups.map(function(index, i){
          return(
            <View style={styles.summaryGroupsContainer} key={i}>
                <Summary index={index}/>
            </View>
          );
        });
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
                onLayout={this._setMinHeight.bind(this)}
                    ref={(ref) => {
                        this.category = ref;
                    }}
                    style={styles.category}>
                    <View style={styles.categoryLeft}>
                        <Text style={styles.categoryText}>{this.props.index.category}</Text>
                    </View>   
                    <View style={styles.categoryRight}>
                        <Text style={styles.categoryText}>{this.props.index.total} / {this.props.index.allocated}</Text>
                        <TouchableOpacity onPress={ this.dropdownPress.bind(this) }>
                            <Image style={styles.dropImage} source={ !this.state.expanded ? require('../assets/dropdown.png') : require('../assets/dropdown-expanded.png')}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View 
                    onLayout={this._setMaxHeight.bind(this)}
                >
                {/* { this.state.isDropdownPressed ? this.renderItem() : null } */}
                {this.renderItem()}
                </View>
            </Animated.View>
        );
    }
}

export default Panel;

