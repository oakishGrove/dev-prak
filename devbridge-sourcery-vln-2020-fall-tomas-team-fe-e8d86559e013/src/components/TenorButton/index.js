import { connect } from 'react-redux';
import TenorButton from './TenorButton';
import { selectGif, fetchTrending } from '../../pages/Board/store/tenor/tenorSlice';

const mapDispatchToProps = {
  fetchTrending,
  selectGif,
};

export default connect(null, mapDispatchToProps)(TenorButton);
