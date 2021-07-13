import useForm from '../../hooks/useForm';
import useQuestions from '../../hooks/useQuestions';
import FormStyles from '../styles/FormStyles';

const QuestionsForm = () => {
  const {
    inputs,
    handleChange,
  } = useForm();
  const {
    submitForm,
    loading,
    error,
  } = useQuestions(inputs);

  return (
    <FormStyles onSubmit={submitForm}>
      <fieldset>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Name*"
          required
        />
        <input
          type="text"
          name="fax"
          className="fax"
          value={inputs.fax}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email*"
          required
        />
        <input
          type="phone"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <textarea
          name="comments"
          id="comments"
          value={inputs.comments}
          onChange={handleChange}
          placeholder="Comments*"
          required
        />
        <div>{error ? <p>{`Error: ${error}`}</p> : ''}</div>
        <button type="submit" disabled={loading}>{(loading) ? 'SUBMITTING ...' : 'SUBMIT'}</button>
      </fieldset>
    </FormStyles>
  );
};

export default QuestionsForm;
