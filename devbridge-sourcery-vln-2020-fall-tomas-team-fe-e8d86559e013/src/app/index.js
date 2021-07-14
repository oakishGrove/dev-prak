import { connect } from 'react-redux';
import { getIsUserAuthenticating } from '../pages/Login/store/loginSelectors';
import { fetchAuthData } from '../pages/Login/store/loginSlice';
import App from './App';

const mapStateToProps = state => ({
  isUserAuthenticating: getIsUserAuthenticating(state),
});

const mapDispatchToProps = {
  fetchAuthData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
