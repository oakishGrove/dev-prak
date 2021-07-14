import { connect } from 'react-redux';
import { addColumnInput } from '../../pages/Board/store/boardActions';
import Column from './Column';

const mapStateToProps = state => ({
  boardId: state.board.boardId,
});

const mapDispatchToProps = {
  addColumnInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);
