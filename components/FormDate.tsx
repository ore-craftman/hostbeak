import { useState } from 'react'

interface PropSchema {
  label: string
  defaultDate: string
}

const FormDate = ({ label, defaultDate }: PropSchema) => {
  const [state, setState] = useState(defaultDate)
  return (
    <div className="my-3 mx-2">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type="date"
        value={defaultDate}
        onChange={(e) => setState(e.target.value)}
        className="mt-1 w-full rounded-md border p-3 text-gray-400 focus:outline-none"
      />
    </div>
  )
}

export default FormDate
