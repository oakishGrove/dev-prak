import { connect } from 'react-redux';
import {
  getCurrentUser,
  getIsUserAuthenticating,
  getIsUserAuthenticationError,
} from './store/loginSelectors';
import { authenticateUser } from './store/loginSlice';
import Login from '../../components/LoginForm';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  isAuthenticating: getIsUserAuthenticating(state),
  isUserAuthenticationError: getIsUserAuthenticationError(state),
});

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
