import styled from 'styled-components';
import AddressInput from '../AddressInput';
import useForm from '../../hooks/useForm';
import useReferral from '../../hooks/useReferral';
import FormStyles from '../styles/FormStyles';

const ReferralStyles = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    margin-bottom: 1rem;
  }
`;

const SelectOptions = styled.div`
  & div {
    display: flex;
    width: 100%;
    line-height: 1;
    margin: 1rem 0;
  }
  & input {
    margin: 0;
    width: auto;
  }
  & label {
    margin: 0;
    padding-left: .75rem;
  }
`;

const ReferralForm = (props) => {
  const {
    inputs,
    setInputs,
    handleChange,
    clearForm,
  } = useForm({ address: '' });
  const {
    submitForm,
    loading,
    error,
  } = useReferral(inputs);

  return (
    <ReferralStyles>
      <FormStyles onSubmit={submitForm}>
        <fieldset>
          {props.children}
          <h3 className="centered">Property Information</h3>
          <input type="text" name="fax" id="fax" value={inputs.fax} onChange={handleChange} />

          <input type="text" name="ownerName" id="ownerName" value={inputs.ownerName} onChange={handleChange} placeholder="Owner's name" />
          <AddressInput inputController={{ inputs, setInputs }} />

          <h3 className="centered">Your Information</h3>

          <input type="text" name="name" id="name" value={inputs.name} onChange={handleChange} placeholder="Your name*" required />
          <input type="email" name="email" id="email" value={inputs.email} onChange={handleChange} placeholder="Email*" required />
          <input type="phone" name="phone" id="phone" value={inputs.phone} onChange={handleChange} placeholder="Phone" />
          <h3 className="centered">Additional Info</h3>
          <textarea name="info" id="info" value={inputs.info} onChange={handleChange} placeholder="How you found this property, relation to the owner, etc..." />
          <label htmlFor="anonymous" name="anonymous">
            Do you wish to remain anonymous to this property owner?
            <span className="asterisk">*</span>
            <SelectOptions>
              <div>
                <input type="radio" name="anonymous" value="yes" onChange={handleChange} required />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input type="radio" name="anonymous" value="no" onChange={handleChange} required />
                <label htmlFor="no">No</label>
              </div>
            </SelectOptions>
          </label>

          <div>{error ? <p>{`Error: ${error}`}</p> : ''}</div>
          <button type="submit" disabled={loading}>{(loading) ? 'SUBMITTING ...' : 'SUBMIT'}</button>
        </fieldset>
      </FormStyles>
    </ReferralStyles>
  );
};

export default ReferralForm;
