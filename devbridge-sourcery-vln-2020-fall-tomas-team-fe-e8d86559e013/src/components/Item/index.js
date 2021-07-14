import { connect } from 'react-redux';
import Item from './Item';
import { upVote, addComment, dragDropItem, deleteItem } from '../../pages/Board/store/boardActions';

const mapDispatchToProps = {
  upVote,
  addComment,
  dragDropItem,
  deleteItem,
};

export default connect(null, mapDispatchToProps)(Item);
