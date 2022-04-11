interface PropsSchema {
  defaultText?: string
  label: string
}

const TextInput = ({ defaultText, label }: PropsSchema) => {
  return (
    <>
      <section className="my-4 mx-2">
        <label className="text-sm text-gray-600">{label}</label>
        <input
          type="text"
          placeholder={defaultText}
          className="w-full rounded-md border border-gray-100 p-3 outline-none placeholder:text-gray-300"
        />
      </section>
    </>
  )
}

export default TextInput
