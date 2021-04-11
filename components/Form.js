import styled from 'styled-components';
import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import useForm from '../hooks/useForm';

const FormStyles = styled.form`
  max-width: 600px;
  min-width: 30rem;
  font-size: 1.5rem;
  padding-bottom: 2rem;
  fieldset {
    border: var(--card-border);
    border-radius: 2px;
    padding: 4rem;
    background: white;
    box-shadow: var(--bs);
  }
  h2 {
    text-align: center;
  }
  label {
    margin-bottom: 1rem;
    font-weight: bold;
    & span.asterisk {
      color: var(--red);
    }
  }
  a {
    color: var(--light-blue);
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
      color: var(--light-blue-hover);
    }
  }
  .location-search-input,
  .location-search-input:focus,
  .location-search-input:active {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    border: honeydew;
    display: block;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border-radius: 2px;
    outline: none;
  }
  .autocomplete-dropdown-container {
    border-bottom: honeydew;
    border-left: honeydew;
    border-right: honeydew;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    position: absolute;
    z-index: 1000;
    border-radius: 0 0 2px 2px;
  }
  button {
    margin-top: 2rem;
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    width: 46%;
  }
`;

const Form = () => {
  const { inputs, handleChange, clearForm } = useForm({ address: '' });
  const [address, setAddress] = useState();

  const handleAddressChange = (addr) => {
    setAddress(addr);
  };

  return (
    <FormStyles>
      <fieldset>
        <h2>Tell us about your property!</h2>
        <label htmlFor="address" name="address">
          Property address
          <span className="asterisk">*</span>
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
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
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
        </label>
        <FormRow>
          <label htmlFor="email" name="email">
            Email
            <span className="asterisk">*</span>
            <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
          </label>
          <label htmlFor="phone" name="phone">
            Phone
            <span className="asterisk">*</span>
            <input type="phone" name="phone" value={inputs.phone} onChange={handleChange} required />
          </label>
        </FormRow>
        <button type="submit">Submit</button>
      </fieldset>
    </FormStyles>
  );
};

export default Form;
