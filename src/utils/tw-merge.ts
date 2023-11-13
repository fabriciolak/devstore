import { twMerge, type ClassNameValue } from 'tailwind-merge'

export function tw(...className: Array<ClassNameValue>) {
  return twMerge(...className)
}
