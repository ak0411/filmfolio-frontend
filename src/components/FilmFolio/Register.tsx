import { ErrorMessage, Formik, FormikErrors } from 'formik';
import {
  Container,
  ErrorText,
  StyledButton,
  StyledField,
  StyledForm,
} from './Login';
import { useAuth } from '../../hooks/useAuth';

interface registerValues {
  name: string | null;
  username: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  const initialValues: registerValues = {
    name: null,
    username: '',
    password: '',
    passwordConfirm: '',
  };
  const { register } = useAuth();

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
        validate={(values: registerValues) => {
          const errors: FormikErrors<registerValues> = {};
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
        onSubmit={(values: registerValues) => {
          register(values.name, values.username, values.password);
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

export default Register;
