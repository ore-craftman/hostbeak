import Image from 'next/image'

interface PropsSchema {
  defaultText: string
  label: string
  id: string
}

const FormUpload = ({ defaultText, label, id }: PropsSchema) => {
  return (
    <>
      <section className="mb-5">
        <p className="mb-3 text-sm text-gray-600">{label}</p>

        <div
          className="flex w-full justify-between rounded-md border border-gray-100 p-3 text-gray-400
        outline-none"
        >
          <label htmlFor={id}>{defaultText}</label>

          <Image src="/icons/upload.svg" width={18} height={18} alt="upload" />
        </div>
        <input type="file" id={id} className="hidden" />
      </section>
    </>
  )
}

export default FormUpload
