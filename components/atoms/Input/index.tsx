interface InputProps {
  label: string,
  htmlFor?: string,
  inputType: 'text' | 'number' | 'email' | 'tel' | 'password' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'color' | 'file' | 'range' | 'checkbox' | 'radio' | 'submit' | 'reset' | 'button' | 'image' | 'hidden' | 'textarea',
}

export default function Input(props: Partial<InputProps>) {
  const {label, htmlFor, inputType, ...nativeProps} = props
  return (
    <>
      <label htmlFor={htmlFor} className="form-label text-lg fw-medium color-palette-1 mb-10">Full
        {label}
      </label>
      <input type={inputType} className="form-control rounded-pill text-lg" id={htmlFor} name="name"
        aria-describedby="name" placeholder="Enter your name" {...nativeProps}/>
    </>
  )
}
