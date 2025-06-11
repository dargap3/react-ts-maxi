import { useImperativeHandle, useRef, type ComponentPropsWithoutRef, type FormEvent, type Ref } from "react"

export type FormHandle = {
  clear: () => void
}


type FormProps = ComponentPropsWithoutRef<"form"> & {
  ref: Ref<FormHandle | null>;
  onSave: (value: unknown) => void
}

export default function Form({ ref, onSave, children, ...otherProps }: FormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  // To expose an API to the external components only works in a component that recieves a ref. Note: Starting with React 19, ref is available as a prop. In React 18 and earlier, it was necessary to get the ref from forwardRef.
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("clearing");
        formRef.current?.reset()
      }
    }
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    onSave(data);

  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} {...otherProps} >{children}</form>
  )
}

