import Header from './Header'
import Sidebar from './Sidebar'

interface PropSchema {
  children: JSX.Element[] | JSX.Element
}

const DashboardWrapper = ({ children }: PropSchema) => {
  return (
    <div className="bg-dashGray pl-4" style={{ height: '99vh' }}>
      <section className="3xl:container ml-auto xl:ml-24 2xl:ml-48">
        <Header />

        <div className="relative">
          <aside
            className="absolute z-10  hidden w-60 md:block"
            style={{ height: '85vh' }}
          >
            <Sidebar />
          </aside>
          <main className="mt-8 md:ml-64 lg:ml-72" style={{ height: '85vh' }}>
            {children}
          </main>
        </div>
      </section>
    </div>
  )
}

export default DashboardWrapper
