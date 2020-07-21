/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/header';
import CustomActivityIndicator from '../components/customActivityIndicator';
import Gallery from '../components/gallery';
import * as Actions from '../actions';

class ImagesList extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.props.fetchImages();
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (!this.props.addingImage && nextProps.addingImage) {
      this.scrollable.scrollTo({ y: 0 });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView
          ref={(scrollable) => {
            this.scrollable = scrollable;
          }}
        >
          {this.props.addingImage && (
            <CustomActivityIndicator message="Adding image" />
          )}
          <Gallery
            imageList={this.props.images}
            loading={this.props.fetchingImages}
          />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesReducer.images,
    addingImage: state.imagesReducer.addingImage,
    fetchingImages: state.imagesReducer.fetchingImages,
  };
}

function mapStateActionsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(ImagesList);
