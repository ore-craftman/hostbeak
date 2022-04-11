import DashboardWrapper from '../components/DashboardWrapper'
import Report from '../components/Report'

const ViewReports = () => {
  return (
    <>
      <DashboardWrapper>
        <div className="z-10 h-full rounded-l-md bg-white pb-10">
          <section className="h-full p-10">
            <h2 className="mb-5 text-2xl font-bold text-slate-800">
              View Reports
            </h2>

            <Report />
          </section>
        </div>
      </DashboardWrapper>
    </>
  )
}

export default ViewReports
