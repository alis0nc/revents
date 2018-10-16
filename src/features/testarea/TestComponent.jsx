import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import GoogleMapReact from "google-map-react";

import { incrementCounter, decrementCounter } from "./TestActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

const Marker = () => <Icon name='marker' size='big' color='red' />

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 42.3190342,
      lng: -83.1042411
    },
    zoom: 15
  };

  state = {
    address: "",
    scriptLoaded: false
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFSxO1FrLdi8TBOxI6DrERPJ_knGWtxns&libraries=places"
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Component</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={decrementCounter} color="red" content="-" />
        <Button onClick={incrementCounter} color="green" content="+" />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>

        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDFSxO1FrLdi8TBOxI6DrERPJ_knGWtxns"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={42.3190342}
              lng={-83.1042411}
              text={"Home"}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
