import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Redirect, Route, withRouter} from 'react-router-native';
import paths from '../../paths';
import Welcome from '../../components/Welcome';
import {isAuth} from '../../store';

export class Authenticated extends Component{
    render(){
        const {children,user} = this.props;
        return(
            <View>
                <Welcome name={user.name} />
                {children}
            </View>
        )
    }
}

export const decorator = connect(state => ({
    isAuth,
    to:paths.login,
    user:state.user
}));
export default decorator(Authenticated);
