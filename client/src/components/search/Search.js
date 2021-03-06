import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'components/search/MapLeaflet';
import { mapSearchDispatchToProps } from 'api/actions';

class Search extends Component {

  componentDidMount() {
    this.props.request();
  }

  render() {
    const { gyms } = this.props;
    return (
      <div className="search">
        <Map gyms={gyms} />
      </div>
    );
  }
}

export default connect(({ gyms }) => ({ gyms }), mapSearchDispatchToProps)(Search);