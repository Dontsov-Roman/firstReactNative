import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Redirect, Route} from 'react-router-native';
import paths from '../../paths';

export class NotAuthenticated extends Component{
    render(){
        const {to, isAuth, children} = this.props;
        return(!isAuth()?
        <View>
            {children}
        </View>:
        <Redirect to={to} />)
    }
}

export const decorator = connect(state => ({
    isAuth:() => state.user.name?true:false,
    to:paths.home
}));
export default decorator(NotAuthenticated);
