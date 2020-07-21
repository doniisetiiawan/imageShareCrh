/* eslint-disable react/prop-types */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header';
import * as Actions from '../actions';
import ImagesGrid from '../components/imagesGrid';

const { height } = Dimensions.get('window');

class MyImages extends React.Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.props.fetchImages(this.props.user.name);
  };

  render() {
    return (
      <View>
        <Header />
        {this.props.fetchingImages && (
          <View
            style={{
              justifyContent: 'center',
              height: height - 50,
            }}
          >
            <ActivityIndicator />
          </View>
        )}
        <ImagesGrid images={this.props.images} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesReducer.userImages,
    user: state.imagesReducer.user,
    fetchingImages: state.imagesReducer.fetchingUserImages,
  };
}

function mapStateActionsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(MyImages);
