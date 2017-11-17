import React,{Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button,StyleSheet} from 'react-native';
import Camera,{constants} from 'react-native-camera';
import {withRouter} from 'react-router-native';
import AuthForm from '../../components/AuthForm';
import * as actions from '../../actions/user';


export const decorator = connect(state => ({user:state.user}), dispatch => ({onLogin:name => actions.enterName(name)(dispatch)}));

// export default decorator(AuthForm);
@decorator
export class Cam extends Component{
    camera;
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
    render(){
        return (
            <View style={styles.container}>
                <Camera
                    style={{height:150,width:150}}
                    ref={cam => {
                        this.camera = cam;
                    }}
                    aspect={constants.Aspect.fill}>
                </Camera>
            </View>
        );
    }
}

export default Cam;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width:200,
        height:200
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});