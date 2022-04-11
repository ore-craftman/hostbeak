import DashboardWrapper from '../components/DashboardWrapper'
import FormDate from '../components/FormDate'
import FormSelect from '../components/FormSelect'
import FormUpload from '../components/FormUpload'
import TextInput from '../components/TextInput'
import Image from 'next/image'

const AddBill = () => {
  return (
    <>
      <DashboardWrapper>
        <div className="z-10 rounded-md bg-white pb-10">
          <section className="h-4/5 p-10">
            <h2 className="text-2xl font-bold text-slate-800">Add bill</h2>

            <section className="justify-between md:flex">
              <div>
                <FormSelect options={['vendor1', 'vendor2']} label="Vendor" />
                <FormSelect
                  options={['CAD - U.S dollar']}
                  defaultOption="USD - U.S dollar"
                  label="Currency"
                />
                <FormUpload
                  label="Upload Copy of Bill"
                  id="billfile"
                  defaultText="Upload File"
                />
              </div>
              <div className="md:mx-4 lg:mx-0">
                <FormDate label="Date" defaultDate="2021-03-25" />
                <FormDate label="Due Date" defaultDate="2021-03-25" />
                <TextInput label="P.O. / S.O" />
              </div>
              <div>
                <TextInput label="Bill #" />
                <div>
                  <label className="text-sm text-gray-600">Notes</label>
                  <textarea
                    style={{ resize: 'none', height: '145px' }}
                    className="w-full rounded-md border border-gray-100
                  p-3 outline-none placeholder:text-gray-300"
                  ></textarea>
                </div>
              </div>
              <div></div>
              <div></div>
            </section>

            <section className="mt-5 rounded-md border p-4 xl:mr-10">
              <table className="w-full table-auto text-left">
                <thead className="border-b-2 border-gray-400">
                  <tr>
                    <th className="w-32 py-2 ">Item</th>
                    <th className="w-40 py-2">Expense Category</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Qty</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Tax</th>
                    <th className="py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td>
                      <FormSelect options={['item1', 'item2']} label="" />
                    </td>
                    <td>
                      <FormSelect
                        options={['category1', 'category2']}
                        label=""
                      />
                    </td>
                    <td>
                      <TextInput label="" />
                    </td>
                    <td>
                      <TextInput label="" defaultText="1" />
                    </td>
                    <td>
                      <TextInput label="" defaultText="0" />
                    </td>
                    <td>
                      <div className="z-10 flex">
                        <TextInput label="" />
                        <Image
                          src="/icons/edit.svg"
                          width={18}
                          height={18}
                          alt="edit"
                        />
                      </div>
                    </td>
                    <td className="w-28 pl-5">
                      <div className="flex justify-between">
                        <p>N0.00</p>

                        <Image
                          src="/icons/trash.svg"
                          width={18}
                          height={18}
                          alt="edit"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <section className="ml-auto w-48 py-2 text-gray-600 lg:mr-12">
                  <p className="text-right">
                    Subtotal: <span className="ml-5">N0.00</span>
                  </p>
                  <p className="text-right">
                    Total (NGN): <span className="ml-5">N0.00</span>
                  </p>
                </section>
              </div>

              <div className="mt-3 flex justify-end">
                <button className="rounded-md border-2 py-4 px-7 sm:mr-4">
                  Cancel
                </button>
                <button className="rounded-md bg-baseCyan  py-4 px-7 text-white">
                  Cancel
                </button>
              </div>
            </section>
          </section>
        </div>
      </DashboardWrapper>
    </>
  )
}

export default AddBill
