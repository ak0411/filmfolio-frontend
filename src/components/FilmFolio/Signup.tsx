import { ErrorMessage, Formik, FormikErrors } from 'formik';
import {
  Container,
  ErrorText,
  StyledButton,
  StyledField,
  StyledForm,
} from './Login';

interface signupValues {
  name?: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

const Signup = () => {
  const initialValues: signupValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

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
        Sign up
      </h1>
      <Formik
        initialValues={initialValues}
        validate={(values: signupValues) => {
          const errors: FormikErrors<signupValues> = {};
          if (!values.username) {
            errors.username = 'Username required';
          }

          if (!values.password) {
            errors.password = 'Password required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          }

          if (!values.passwordConfirm) {
            errors.passwordConfirm = 'Confirm your password';
          } else if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'Password does not match';
          }

          return errors;
        }}
        onSubmit={(values: signupValues, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        <StyledForm>
          <StyledField id='name' name='name' placeholder='Name (Optional)' />
          <StyledField id='username' name='username' placeholder='Username' />
          <ErrorMessage name='username' component={ErrorText} />
          <StyledField
            id='password'
            name='password'
            placeholder='Password'
            type='password'
          />
          <ErrorMessage name='password' component={ErrorText} />
          <StyledField
            id='passwordConfirm'
            name='passwordConfirm'
            placeholder='Confirm password'
            type='password'
          />
          <ErrorMessage name='passwordConfirm' component={ErrorText} />
          <StyledButton type='submit'>Enter</StyledButton>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default Signup;
