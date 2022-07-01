import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from 'react'
import { setSignIn } from "services/authentication/auth"
import { toast } from "react-toastify"
import Cookies from 'js-cookie'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const collectionsClass = {
    label: classNames('form-label text-lg fw-medium color-palette-1 mb-10'),
    input: classNames('form-control rounded-pill text-lg')
  }
  const router = useRouter()
  
  const onSubmit = async () => {
    const payload = {
      email,
      password
    }

    if(!email || !password) {
      toast.error('Email and Password is required!')
    } else {
      const result = await setSignIn(payload)
      console.log({result})

      if(result.error) {
        toast.error('Failed sign in into your account! Please check your email and password.')
      } else {
        toast.success(result.message)
        const { access_token } = result.data
        const tokenBase64 = btoa(access_token) //--> Protect token before store in cookie
        Cookies.set('access_token', tokenBase64, { expires: 1 })

        setTimeout(() => {
          router.push('/')
        }, 2500)
      }
    }
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
        <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
        <div className="pt-50">
          <label className={collectionsClass.label}>Email Address</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value) } 
            className={collectionsClass.input} aria-describedby="email" placeholder="Enter your email address" />
        </div>
        <div className="pt-30">
          <label className={collectionsClass.label}>Password</label>
          <input 
            type="password" value={password} className={collectionsClass.input} 
            onChange={(event) => setPassword(event.target.value)} aria-describedby="password" placeholder="Your password" />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button 
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            role="button" type="button" onClick={onSubmit}>Continue to Sign In
          </button>

          <Link href="/sign-up">
            <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
               role="button">Sign Up</a>
          </Link>
      </div>
    </>
  )
}
