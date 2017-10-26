import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';

import {paths} from '../../routes'
import {decorator} from '../InitPage'

export class DecrementPage extends Component{
    render(){
        const {value,actions} = this.props;
        return (
            <View style={{flex:1}}>
                <Text>
                    {value}
                </Text>
                <Button
                    onPress={actions.decrement}
                    title="decrement"
                    color="#841584"
                    />
                <Link to={paths.increment}>
                    <Button
                        title="go to increment page"
                    />
                </Link>
            </View>
        )
    }
}

export default decorator(DecrementPage);
