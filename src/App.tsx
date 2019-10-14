import React from 'react';
import AppRoutes from './app/routes';
// import { connect } from 'react-redux';
// import { loadAuth } from './Admin/redux/Authentication/actions';
// import Toast from './components/Toast';
// interface IProps {
//   isAuthenticationLoaded: boolean;
//   loadAuth: Function;
// }

// class App extends React.Component<IProps, {}> {
class App extends React.Component {
  render() {
    // if (!this.props.isAuthenticationLoaded) {
    //   //TODO: create AppLoading
    //   this.props.loadAuth();
    //   return <p>loading</p>;
    // }

    return (
      // {/* <Toast /> */}
      <AppRoutes />
    );
  }
}
// const mapStateToProps = (state: {
//   authentication: { isAuthenticationLoaded: boolean };
// }) => ({
//   isAuthenticationLoaded: state.authentication.isAuthenticationLoaded
// });

// const mapDispatchToProps = {
//   loadAuth,
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);

export default App;
