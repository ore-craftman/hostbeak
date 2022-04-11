import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header className="2xl:mr-30 flex items-center justify-between py-5 pr-4 xl:mr-24">
        <section className="flex w-52 items-center justify-between rounded-3xl bg-white px-5 py-3 shadow-lg sm:w-60">
          <Image src="/logo.svg" width={35} height={35} alt="hostbeak" />
          <h2 className="text-xl font-semibold">HostBeak</h2>
          <Image src="/icons/caret-right.svg" width={18} height={18} />
        </section>

        <section className="flex w-60 items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border">
            <Image
              src="/icons/bell.svg"
              width={20}
              height={20}
              alt="notification"
            />
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-700"></div>
          <div className="flex w-28 items-center justify-between">
            <p>Ogoluwa</p>
            <Image
              src="/icons/arrow-down.svg"
              width={15}
              height={15}
              alt="notification"
            />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
