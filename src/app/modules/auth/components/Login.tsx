/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
// import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {login} from '../core/_requests'
import {useAuth} from '../core/Auth'
import jwt_decode from 'jwt-decode'
// import {auth} from '../../../../firebase'
// import {signInWithCustomToken} from 'firebase/auth'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'adncenter@gmail.com',
  password: 'a123a123',
}

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  // firebase auth
  // const initializeFirebaseAuth = async (userInfo: any) => {
  //   if (userInfo.firebase_token) return signInWithCustomToken(auth, userInfo.firebase_token)
  // }

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data} = await login(values.email, values.password)
        // console.log(data.data)
        const userInfo = jwt_decode(data.data.access)

        saveAuth(data.data, userInfo)
        console.log(userInfo)

        // const {data: user} = await getUserByToken(auth.access)
        setCurrentUser(userInfo)
        // firebase auth
        // await initializeFirebaseAuth(userInfo)
      } catch (error) {
        saveAuth(undefined, undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <section className='card p-8 bg-light'>
      <form
        className='form w-100'
        onSubmit={formik.handleSubmit}
        noValidate
        id='kt_login_signin_form'
      >
        {/* begin::Heading */}
        {/* <div className='text-center mb-11'>
          <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
          <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
        </div> */}
        {/* begin::Heading */}

        {/* begin::Login options */}

        {/* end::Login options */}

        {/* begin::Separator */}
        {/* end::Separator */}

        {formik.status ? (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>{formik.status}</div>
          </div>
        ) : (
          <div className='mb-10 bg-light p-8 rounded'>
            {/* <div className='text-info'>
              Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
              continue.
            </div> */}
          </div>
        )}

        {/* begin::Form group */}
        <div className='fv-row mb-8'>
          <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
          <input
            placeholder='Email'
            {...formik.getFieldProps('email')}
            className={clsx(
              'form-control bg-transparent',
              {'is-invalid': formik.touched.email && formik.errors.email},
              {
                'is-valid': formik.touched.email && !formik.errors.email,
              }
            )}
            type='email'
            name='email'
            autoComplete='off'
          />
          {formik.touched.email && formik.errors.email && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          )}
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className='fv-row mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
          <input
            type='password'
            autoComplete='off'
            {...formik.getFieldProps('password')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid': formik.touched.password && formik.errors.password,
              },
              {
                'is-valid': formik.touched.password && !formik.errors.password,
              }
            )}
          />
          {formik.touched.password && formik.errors.password && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.password}</span>
              </div>
            </div>
          )}
        </div>
        {/* end::Form group */}

        {/* begin::Wrapper */}
        <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
          <div />

          {/* begin::Link */}
          {/* <Link to='/auth/forgot-password' className='link-primary'>
            Forgot Password ?
          </Link> */}
          {/* end::Link */}
        </div>
        {/* end::Wrapper */}

        {/* begin::Action */}
        <div className='d-grid mb-10'>
          <button
            type='submit'
            id='kt_sign_in_submit'
            className='btn btn-primary'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {!loading && <span className='indicator-label'>Continue</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Action */}

        {/* <div className='text-gray-500 text-center fw-semibold fs-6'>
          Not a Member yet?{' '}
          <Link to='/auth/registration' className='link-primary'>
            Sign up
          </Link>
        </div> */}
      </form>
    </section>
  )
}
