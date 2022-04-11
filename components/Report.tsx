import Image from 'next/image'

const Report = () => {
  const titles = [
    'February Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
    'March 2021 Report',
  ]
  return (
    <>
      {titles.map((title, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between border-b-2 border-gray-100 py-3"
          >
            <div className="flex w-10/12 items-center">
              <input type="checkbox" />
              <div className="ml-4 flex items-center">
                <h3 className="mx-5 font-medium text-slate-600">{title}</h3>
                {index === 0 && (
                  <p className="mx-2 rounded-xl bg-green-100 px-2 py-0.5 text-sm font-medium  text-green-700">
                    NEW
                  </p>
                )}
              </div>
              <p className="text-gray-400">4th , October 2021 11:20am</p>
            </div>
            <div className="2xl:mr-30 ml-auto flex items-center xl:mr-24">
              <button className="mr-4 rounded-md bg-baseCyan py-2 px-6 text-white">
                View
              </button>
              <Image
                src="/icons/comment.svg"
                width={18}
                height={18}
                alt="edit"
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Report
