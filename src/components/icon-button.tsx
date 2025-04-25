import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from './ui/button'

interface ButtonProps extends ComponentProps<'button'> {}

export function IconButton({className, ...props}: ButtonProps) {
  return (
    <Button
      className={twMerge("p-1.5 bg-red-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900", className)}
      {...props}
    />
  )
}