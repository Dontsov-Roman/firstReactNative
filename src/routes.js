// routes.js
import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter as Router, Route, Link} from 'react-router-native';
// import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
// import { connect } from 'react-redux';
import InitPage from './containers/InitPage';
import DecrementPage from './containers/DecrementPage';
// other imports...
// export default from './containers/InitPage'

export const paths = {
    home:'/home',
    decrement:'/decrement'
};
export const routes = () => (
    <Router>
        <View>
            <InitPage />
            <Route exact path={paths.home} component={InitPage} />
            <Route path={paths.decrement} component={DecrementPage} />
        </View>
    </Router>
);
export default routes;
// const scenes = Actions.create(
//   <Scene
//       key="Root"
//       component={InitPage}
//       initial={true}
//       />
// );

// class Routes extends React.Component {
//   static propTypes = {
//     dispatch: PropTypes.func,
//   };

  // reducerCreate(params) {
  //   const defaultReducer = Reducer(params);
  //   return (state, action) => {
  //     this.props.dispatch(action)
  //     return defaultReducer(state, action);
  //   };
  // }

//   render () {
//     return (
//         <InitPage />
//     );
//   }
// }

// export default connect()(Routes);
