'use client'

const Button = () => {
  return (
    <button
      className="border p-2 rounded-lg border-blue-400 hover:bg-blue-400 hover:text-white transition"
      onClick={() => {
        console.log('click button')
      }}
    >
      Button
    </button>
  )
}

export default Button
