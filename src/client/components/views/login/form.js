import React from 'react'
import { Field, reduxForm, SubmissionError} from 'redux-form'
import { login, loginSuccess, loginFailure } from '../../../actions/login';
import { push } from 'react-router-redux';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const LoginForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

const submit = (values, dispatch) => {
  if (![ 'a', 'paul', 'george', 'ringo' ].includes(values.username)) {
    throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
  } else if (values.password !== 'z') {
    throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
  }
    return new Promise ((resolve, reject) => {
        let response = dispatch(login(values));
        response.payload.then((payload) =>  {

            // if any one of these exist, then there is a field error
            if (payload.status !== 200) {
              dispatch(loginFailure(payload.data));
              throw new SubmissionError({_error: 'Login failed!' });
            }

            var jwt = payload.data.jwt;
  					var savedJwt = localStorage.getItem('jwt');

  					if (savedJwt !== jwt) {

  						localStorage.setItem('jwt', jwt);

  						//var nextPath = router.getCurrentLocation().nextPath || '/';
  						dispatch(loginSuccess(jwt));
  						dispatch(push('/'));
            }
        }).catch((payload) => {
            // let other components know of error by updating the redux` state
            localStorage.removeItem('jwt');
            disptch(loginFailure(payload.data));
            reject(payload.data); // this is for redux-form itself
        });
    });
}


export default reduxForm({
  form: 'loginForm'  // a unique identifier for this form
})(LoginForm)
