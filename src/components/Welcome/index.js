import React,{Component} from 'react';
import {
    View,
    Text,
    // StyleSheetd
} from 'react-native';
import {Redirect} from 'react-router-native';

export default class Welcome extends Component{

    static defaultProps = {
        name:''
    }

    render(){
        const {name} = this.props;
        return(
            <View>
                <Text>
                    Welcome,{name}!
                </Text>
            </View>
        )
    }
}
