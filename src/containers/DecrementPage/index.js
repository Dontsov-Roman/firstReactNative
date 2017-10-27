import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';

import ButtonRedirect from '../../components/ButtonRedirect';
import {paths} from '../../routes'
import {decorator} from '../InitPage'

export class DecrementPage extends Component{
    render(){
        const {value,actions} = this.props;
        return (
            <View>
                <Text>DecrementPage</Text>

                <Text>
                    {value}
                </Text>
                <Button
                    onPress={actions.decrement}
                    title="decrement"
                    color="#841584"
                    />
                <ButtonRedirect to={paths.home} title="go to increment page" color="#00ff00" />
            </View>
        )
    }
}

export default decorator(DecrementPage);
