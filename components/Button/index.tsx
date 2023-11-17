"use client"

interface ButtonProps {
  children: React.ReactNode,
  onClick?: () => void,
  bgColor?: string
}

const index = (props: ButtonProps) => {
  const { children, onClick, bgColor } = props
  return (
    <button className={`${bgColor} py-3 px-5 text-white rounded-full`} onClick={onClick}>
      {children}
    </button>
  )
}

export default index
