interface PropSchema {
  options: string[]
  label: string
  defaultOption?: string
}

const FormSelect = ({ options, label, defaultOption }: PropSchema) => {
  return (
    <div className="my-3 mx-2">
      <label className="text-sm text-gray-600">{label}</label>
      <select
        name="vendors"
        id="vendors"
        className="mt-1 w-full rounded-md border p-3 text-gray-400 focus:outline-none"
      >
        <option selected={true}>
          {defaultOption ? defaultOption : 'Choose'}
        </option>

        {options.map((option: string) => {
          return <option value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default FormSelect
