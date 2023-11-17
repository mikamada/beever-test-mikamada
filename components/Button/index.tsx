"use client"

interface ButtonProps {
  children: React.ReactNode,
  onClick?: () => void,
  bgColor?: string,
  disabled?: boolean
}

const index = (props: ButtonProps) => {
  const { children, onClick, bgColor, disabled } = props
  return (
    <button className={`${bgColor} py-3 px-5 text-white rounded-full`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default index
