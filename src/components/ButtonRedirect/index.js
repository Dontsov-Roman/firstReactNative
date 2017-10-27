import React,{Component} from 'react';
import {Button} from 'react-native';
import {withRouter} from 'react-router-native';

export default withRouter(({history, to, onPress, ...rest}) => (
    <Button
    onPress={()=>{
        history.push(to);
        onPress?onPress():'';
    }}
    {...rest}
    />));
