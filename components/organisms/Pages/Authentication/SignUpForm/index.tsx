import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  
  const collectionsClass = {
    label: classNames('form-label text-lg fw-medium color-palette-1 mb-10'),
    input: classNames('form-control rounded-pill text-lg')
  }

  const payload = {
    name,
    email,
    password
  }

  const onSubmit = () => {
    localStorage.setItem('payload-signup', JSON.stringify(payload))
    router.push('/sign-up-photo')
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
        <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
        <div className="pt-50">
          <label className={collectionsClass.label}>Full Name</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} className={collectionsClass.input}
              aria-describedby="name" placeholder="Enter your name" />
        </div>
        <div className="pt-30">
          <label className={collectionsClass.label}>Email Address</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className={collectionsClass.input} 
              aria-describedby="email" placeholder="Enter your email address" />
        </div>
        <div className="pt-30">
          <label className={collectionsClass.label}>Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className={collectionsClass.input} 
              aria-describedby="password" placeholder="Your password" />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
            role="button" onClick={onSubmit}>Continue</button>
          
          <Link href='/sign-in'>
            <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" 
              role="button">Sign In</a>
          </Link>
        </div>
    </>
  )
}
