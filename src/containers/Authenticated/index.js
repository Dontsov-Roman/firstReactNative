import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Redirect, Route, withRouter} from 'react-router-native';
import paths from '../../paths';
import Welcome from '../Welcome';
import {isAuth} from '../../store';

export class Authenticated extends Component{
    render(){
        const {children} = this.props;
        return(
            <View>
                <Welcome />
                {children}
            </View>
        )
    }
}

export const decorator = connect(state=>({
    isAuth,
    to:paths.login
}));

export default withRouter(({ history }) => {
    if(!isAuth()){
        history.push(paths.login)
    }else {
        return decorator(Authenticated);
    }
})
