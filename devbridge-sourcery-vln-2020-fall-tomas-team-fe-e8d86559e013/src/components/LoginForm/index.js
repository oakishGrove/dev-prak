import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authenticateUser } from '../../pages/Login/store/loginSlice';

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(null, mapDispatchToProps)(LoginForm);
