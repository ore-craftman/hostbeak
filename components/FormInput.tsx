interface PropsSchema {
  inputType: string
  defaultText?: string
  value: any
  label: string
  stateHandler?: React.Dispatch<React.SetStateAction<any>>
}

const FormInput = ({
  inputType,
  defaultText,
  value,
  label,
  stateHandler,
}: PropsSchema) => {
  return (
    <>
      <section className="mb-5">
        <label className="text-sm text-gray-400">{label}</label>
        <input
          type={inputType}
          placeholder={defaultText}
          required={true}
          value={value}
          onChange={(e) => stateHandler && stateHandler(e.target.value)}
          className="w-full border-b-2 border-gray-100 py-1 outline-none placeholder:text-gray-300 focus:border-blue-900 focus:font-medium focus:text-blue-900"
        />
      </section>
    </>
  )
}

export default FormInput
