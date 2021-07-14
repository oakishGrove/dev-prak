import { connect } from 'react-redux';
import AuthenticatedRoute from './AuthenticatedRoute';

import { getIsUserAuthenticated } from '../../pages/Login/store/loginSelectors';

const mapStateToProps = state => {
  return { isAuthenticated: getIsUserAuthenticated(state) };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
