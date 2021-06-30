// import React, { Component } from 'react';
// import ReactDOM  from 'react-dom';
// import { compose, withProps } from 'recompose';
// import {
//   Map, 
//   Marker, 
//   GoogleApiWrapper,
//   Polyline,
//   withScriptsjs,
//   withGoogleMap,
//   GoogleMap
// } from 'google-maps-react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // for google map places autocomplete
//       address: '',

//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
  
//       mapCenter: {
//         lat: 40.78111956237897, 
//         lng: -73.96643184289792
//       }
//     };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     this.setState({ address });
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => {
//         console.log('Success', latLng);

//         // update center state
//         this.setState({ mapCenter: latLng });
//       })
//       .catch(error => console.error('Error', error));
//   };
 
//   render() {
//     return (
//       <div id='googleMaps'>
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
//         >
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
//               <input
//                 {...getInputProps({
//                   placeholder: 'Search Places ...',
//                   className: 'location-search-input',
//                 })}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map(suggestion => {
//                   const className = suggestion.active
//                     ? 'suggestion-item--active'
//                     : 'suggestion-item';
//                   // inline style for demonstration purpose
//                   const style = suggestion.active
//                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })}
//                     >
//                       <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>

//         <Map 
//           google={this.props.google}
//           initialCenter={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//           center={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//         >
//           <Marker 
//             position={{
//               lat: this.state.mapCenter.lat,
//               lng: this.state.mapCenter.lng
//             }} />
//         </Map>
//       </div>
//     )
//   }
// }

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDQEYKiGhbe46H3JRMT84Zd_OzzkzdfRt4")
//   })(MapContainer)