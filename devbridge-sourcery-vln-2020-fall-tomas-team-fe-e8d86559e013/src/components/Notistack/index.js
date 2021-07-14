import { connect } from 'react-redux';
import NotiStack from './NotiStack';
import { clearQueue, clearNotification } from './notistackSlice';

const mapStateToProps = state => ({
  queue: state.notistack.notifications,
});

const mapDispatchToProps = {
  clearQueue,
  clearNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotiStack);
