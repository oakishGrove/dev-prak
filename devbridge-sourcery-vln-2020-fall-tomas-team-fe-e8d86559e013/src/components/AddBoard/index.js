import { connect } from 'react-redux';
import AddBoard from './AddBoard';
import { createBoard } from '../../pages/Board/store/boardActions';
import { hasBoardCreated, getBoardId } from '../../pages/Board/store/boardSelectors';

const mapDispatchToProps = {
  createBoard,
};

const mapStateToProps = state => ({
  boardCreated: hasBoardCreated(state),
  boardId: getBoardId(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBoard);
