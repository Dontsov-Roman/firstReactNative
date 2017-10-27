import React,{Component} from 'react';
import {View} from 'react-native';
import Welcome from './index';

class Container extends Component{
    render(){
        return(
            <View>
                <Welcome />
                {this.props.children}
            </View>
        )
    }
}
export default Container;
