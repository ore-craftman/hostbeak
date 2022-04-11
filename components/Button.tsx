interface ButtonSchema {
  text: string
  textColor: string
  bgColor: string
  type?: 'submit' | 'button'
}

const Button = ({ text, textColor, bgColor, type }: ButtonSchema) => {
  return (
    <>
      <button
        type={type ? type : 'button'}
        className={`w-full rounded py-4 font-medium shadow-md ${
          textColor + ' ' + bgColor
        }`}
      >
        {text}
      </button>
    </>
  )
}

export default Button
