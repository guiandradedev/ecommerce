import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input } from './ui/input'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ className, error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className={twMerge("group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger", className)}
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon({ className, ...props }: InputIconProps) {
  return (
    <span
      className={twMerge("text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger", className)}
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField({ className, ...props }: InputFieldProps) {
  return <Input className={twMerge("flex-1 outline-0 placeholder-gray-400", className)} {...props} />
}