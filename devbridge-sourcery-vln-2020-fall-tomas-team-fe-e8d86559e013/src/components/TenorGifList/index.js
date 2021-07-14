import { connect } from 'react-redux';
import { searchForGif } from '../../pages/Board/store/tenor/tenorSlice';
import TenorGifList from './TenorGifList';
import { getGifLinks } from '../../pages/Board/store/tenor/tenorSelectors';

const mapStateToProps = state => ({
  gifLinks: getGifLinks(state),
});

const mapDispatchToProps = {
  searchForGif,
};

export default connect(mapStateToProps, mapDispatchToProps)(TenorGifList);
