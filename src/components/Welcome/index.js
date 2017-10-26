import React,{Component} from 'react';
import {
    View,
    Text,
    // StyleSheetd
} from 'react-native';
import {Redirect} from 'react-router-native';

export default class Welcome extends Component{

    static defaultProps = {
        // style: StyleSheet.create({color:"#ff0000", fontSize:30}),
        name:''
    }

    render(){
        const {name, style} = this.props;
        return(
            <View style={style}>
                <Text>
                    Welcome,{name}!
                </Text>
            </View>
        )
    }
}
