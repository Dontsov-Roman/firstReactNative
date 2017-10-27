import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Link} from 'react-router-native';

import style from '../../styles';
import paths from '../../paths';

export default class AccessDenied extends Component{
    render(){
        return (
            <View>
                <Text>
                    You can't see this page.
                </Text>
                <Link to={paths.login}>
                    <Text style={style.link}>
                        Please auth ->
                    </Text>
                </Link>
            </View>
        )
    }
}
