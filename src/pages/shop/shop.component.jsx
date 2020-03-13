import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render () {
    const { match } = this.props;
    return ( // component={componentName} if don't use props
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          // render={(props) => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />) } //CollectionsOverviewWithSpinner({isLoading: loading, props})
        /> 
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          // render={(props) => CollectionsPageWithSpinner({isLoading: !isCollectionsLoaded, props})} // same as how to render above
          />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);