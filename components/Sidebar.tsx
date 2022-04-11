import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Sidebar = () => {
  const [showPurchase, setShowPurchase] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)

  const togglePurchase = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    showPurchase ? setShowPurchase(false) : setShowPurchase(true)
  }
  const toggleAnalytics = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    showAnalytics ? setShowAnalytics(false) : setShowAnalytics(true)
  }

  return (
    <section className="h-full ">
      <nav className="ml-10">
        <div className="mb-10 flex items-center">
          <Image src="/icons/rocket.svg" width={20} height={20} />
          <Link href="/">
            <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
              Welcome
            </a>
          </Link>
        </div>
        <div className="mb-10 flex items-center justify-between">
          <div>
            <Image src="/icons/sales.svg" width={20} height={20} />
            <Link href="/">
              <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
                Sales
              </a>
            </Link>
          </div>
          <Image src="/icons/arrow-right.svg" width={15} height={15} />
        </div>

        <button
          onClick={togglePurchase}
          className={`${showPurchase && 'mb-24'} w-full`}
        >
          <div className="relative mb-10 flex w-full items-center justify-between ">
            <div>
              <span
                className={`${
                  showPurchase && 'rounded-full bg-blue-900 p-1.5 shadow-xl'
                }`}
              >
                <Image
                  src={
                    showPurchase
                      ? '/icons/purchase.svg'
                      : '/icons/purchase-default.svg'
                  }
                  className="translate-y-1"
                  width={20}
                  height={20}
                />
              </span>
              <Link href="#">
                <a
                  className={`${
                    showPurchase ? 'ml-3.5' : 'ml-7'
                  } text-sm text-gray-400 hover:text-blue-800`}
                >
                  Purchases
                </a>
              </Link>

              {showPurchase && (
                <ul className="absolute right-0 text-left">
                  <li className="my-2">
                    <Link href="/add-bill">
                      <a className=" text-blue-700 hover:text-blue-700">
                        Bills
                      </a>
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="/add-bill">
                      <a className="text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Vendors
                      </a>
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="/add-bill">
                      <a className="text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Products & Services
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="ml-auto self-start">
              <Image
                src={
                  showPurchase
                    ? '/icons/arr-down.svg'
                    : '/icons/arrow-right.svg'
                }
                width={15}
                height={15}
              />
            </div>
          </div>
        </button>

        <div className="mb-10 flex items-center justify-between">
          <div>
            <Image src="/icons/accounting.svg" width={20} height={20} />
            <Link href="/">
              <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
                Accounting
              </a>
            </Link>
          </div>
          <Image src="/icons/arrow-right.svg" width={15} height={15} />
        </div>

        <div className="mb-10 flex items-center justify-between">
          <div>
            <Image src="/icons/banking.svg" width={20} height={20} />
            <Link href="/">
              <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
                Banking
              </a>
            </Link>
          </div>
          <Image src="/icons/arrow-right.svg" width={15} height={15} />
        </div>

        <div className="mb-10 flex items-center justify-between">
          <div>
            <Image src="/icons/payroll.svg" width={20} height={20} />
            <Link href="/">
              <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
                Payroll
              </a>
            </Link>
          </div>
          <Image src="/icons/arrow-right.svg" width={15} height={15} />
        </div>

        <div className="mb-10 flex items-center">
          <Image src="/icons/report.svg" width={20} height={20} />
          <Link href="/">
            <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
              Reports
            </a>
          </Link>
        </div>

        <button
          onClick={toggleAnalytics}
          className={`${showAnalytics && 'mb-48'} w-full`}
        >
          <div className="relative mb-10 flex w-full items-center justify-between ">
            <div>
              <span
                className={`${
                  showAnalytics && 'rounded-full bg-blue-900 p-1.5 shadow-xl'
                }`}
              >
                <Image
                  src="/icons/analytics.svg"
                  className="translate-y-1"
                  width={20}
                  height={20}
                />
              </span>
              <Link href="#">
                <a
                  className={`${
                    showAnalytics ? 'ml-3.5' : 'ml-7'
                  } text-sm text-gray-400 hover:text-blue-800`}
                >
                  Analytics
                </a>
              </Link>

              {showAnalytics && (
                <ul className="absolute right-12 text-left">
                  <li className="my-1">
                    <Link href="/view-reports">
                      <a className="text-sm text-blue-700 hover:text-blue-700">
                        View Report
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        To-Do
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Upload Docs
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Chat
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Schedule
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Message Board
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Make Payments
                      </a>
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#">
                      <a className="text-sm text-gray-400 hover:text-blue-700 active:text-blue-700">
                        Billing
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="ml-auto self-start">
              <Image
                src={
                  showAnalytics
                    ? '/icons/arr-down.svg'
                    : '/icons/arrow-right.svg'
                }
                width={15}
                height={15}
              />
            </div>
          </div>
        </button>

        <div className="mb-10 flex items-center">
          <Image src="/icons/settings.svg" width={20} height={20} />
          <Link href="#">
            <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
              Settings
            </a>
          </Link>
        </div>

        <div className="mb-10 mt-20 flex items-center">
          <Image src="/icons/logout.svg" width={20} height={20} />
          <Link href="#">
            <a className="ml-7 text-sm text-gray-400 hover:text-blue-800">
              Logout
            </a>
          </Link>
        </div>
      </nav>

      <div className="border-b-2 pb-8">
        <button className="ml-4 flex w-10/12 items-center justify-between rounded-md bg-baseBlue p-3 text-white">
          <Image src="/icons/acceptpayment.svg" width={25} height={25} />
          Accept Payments
        </button>
      </div>
    </section>
  )
}
export default Sidebar
