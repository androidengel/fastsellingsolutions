import styled from 'styled-components';
import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import useForm from '../hooks/useForm';

const AddressInputStyles = styled.div`
  .autocomplete-dropdown-container {
    border-bottom: honeydew;
    border-left: honeydew;
    border-right: honeydew;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    position: absolute;
    z-index: 1000;
    border-radius: 0 0 2px 2px;
    & span {
      padding: 0 1rem;
    }
  }
`;

const AddressInput = ({ inputController }) => {
  const [address, setAddress] = useState();
  const { inputs, setInputs } = inputController;

  const handleAddressChange = (addr) => {
    setAddress(addr);
    setInputs({
      ...inputs,
      address: addr,
    });
  };

  return (
    <AddressInputStyles>
      <PlacesAutocomplete
        value={address}
        onChange={handleAddressChange}
      >
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Property ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: 'var(--light-grey)', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </AddressInputStyles>
  );
};

export default AddressInput;
