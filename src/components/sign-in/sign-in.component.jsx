import React, { useState } from 'react'; // use hook
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import './sign-in.styles.scss';
import { connect } from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setCredentials ] = useState({ email: '', password: ''})
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    let { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="title">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" label="email" value={email} handleChange={handleChange} required/>
        <FormInput type="password" name="password" label="password" value={password} handleChange={handleChange} required/>
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
        </div>
        
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);


// class SignIn extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: '',
//       password: ''
//     };
//   }
  
//   handleSubmit = async event => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     const { emailSignInStart } = this.props;
//     emailSignInStart(email, password)
//   }

//   handleChange = event => {
//     let { value, name } = event.target;
//     this.setState({[name]: value});
//   }

//   render () {
//     const { googleSignInStart } = this.props
//     return (
//       <div className="sign-in">
//         <h2 className="title">I already have an account</h2>
//         <span className="title">Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
//           <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
//           <div className="buttons">
//             <CustomButton type="submit">SIGN IN</CustomButton>
//             <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
//           </div>
          
//         </form>
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
// })
// export default connect(null, mapDispatchToProps)(SignIn);