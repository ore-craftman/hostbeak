import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

const Signup: NextPage = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [persistUserData, setPersistUserData] = useState(false)

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Hi, ${firstname} check the console for your input values`)
    console.table({
      firstname,
      lastname,
      phone,
      email,
      password,
      persistUserData,
    })
  }

  return (
    <>
      <main style={{ height: '100vh' }} className="flex items-center">
        <aside className="relative hidden h-full w-7/12 md:block">
          <Image
            src="/signup.png"
            alt="sign-up ogolowa"
            layout="fill"
            objectFit="cover"
          />

          <p className="absolute bottom-44 right-10 w-9/12 text-2xl text-white">
            Building exceptional services with Back Office Support and Business
            Perfomance
          </p>
        </aside>
        <section className="mx-5 w-full md:mx-10 md:w-6/12 lg:mx-24 xl:mx-40 2xl:mx-48">
          <section className="mb-5">
            <h3 className="text-xl font-bold text-blue-900">Create Account</h3>
            <p className="text-gray-400">Build an exceptional business</p>
          </section>

          <form onSubmit={submitHandler}>
            <div className="flex justify-between">
              <section style={{ width: '45%' }}>
                <FormInput
                  label="First Name"
                  inputType="text"
                  defaultText="Enter your first name"
                  value={firstname}
                  stateHandler={setFirstname}
                />
              </section>
              <section style={{ width: '45%' }}>
                <FormInput
                  label="Last Name"
                  inputType="text"
                  defaultText="Enter your last name"
                  value={lastname}
                  stateHandler={setLastname}
                />
              </section>
            </div>

            <div>
              <FormInput
                label="Phone Number"
                inputType="tel"
                defaultText="Enter your phone number"
                value={phone}
                stateHandler={setPhone}
              />
            </div>
            <div>
              <FormInput
                label="Email Address"
                inputType="tel"
                defaultText="Enter your email"
                value={email}
                stateHandler={setEmail}
              />
            </div>
            <div>
              <FormInput
                label="Password"
                inputType="password"
                defaultText="Enter your password"
                value={password}
                stateHandler={setPassword}
              />
            </div>

            <div className="flex justify-between">
              <section>
                <input
                  type="checkbox"
                  onChange={() => setPersistUserData(true)}
                  id="persistData"
                />
                <label
                  htmlFor="persistData"
                  className="ml-2 text-sm text-gray-400"
                >
                  Remember me
                </label>
              </section>

              <section>
                <Link href="/">
                  <a className="text-sm font-medium text-baseCyan">
                    Forgot Password
                  </a>
                </Link>
              </section>
            </div>

            <div className="my-5">
              <Button
                text="Sign Up"
                textColor="text-white"
                bgColor="bg-baseCyan"
                type="submit"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="h-0.5 w-1/4 bg-gray-100"></div>
              <section>
                <span className="text-gray-500">Got an Account?</span>
                <Link href="#">
                  <a className="ml-2 text-baseCyan">Sign In</a>
                </Link>
              </section>
              <div className="h-0.5 w-1/4 bg-gray-100"></div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default Signup
