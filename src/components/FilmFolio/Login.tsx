import { Field, Form, Formik, FormikErrors, ErrorMessage } from 'formik';
import { Button } from 'react95';
import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  max-width: 600px;
`;

export const StyledField = styled(Field)`
  height: 2.5em;
  font-size: 1.75em;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  font-size: 1.75em;
  height: 2.5em;
`;

export const ErrorText = styled.div`
  color: red;
  text-align: center;
`;

interface loginValues {
  username: string;
  password: string;
}

const Login = () => {
  const initialValues: loginValues = { username: '', password: '' };

  return (
    <Container>
      <h1
        style={{
          fontSize: '1.75em',
          fontWeight: 'bold',
          alignSelf: 'center',
          textTransform: 'uppercase',
        }}
      >
        Login
      </h1>
      <Formik
        initialValues={initialValues}
        validate={(values: loginValues) => {
          const errors: FormikErrors<loginValues> = {};
          if (!values.username) {
            errors.username = 'Username required';
          }

          if (!values.password) {
            errors.password = 'Password required';
          }
          return errors;
        }}
        onSubmit={(values: loginValues, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        <StyledForm>
          <StyledField id='username' name='username' placeholder='Username' />
          <ErrorMessage name='username' component={ErrorText} />
          <StyledField id='password' name='password' placeholder='Password' />
          <ErrorMessage name='password' component={ErrorText} />
          <StyledButton type='submit'>Enter</StyledButton>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default Login;
