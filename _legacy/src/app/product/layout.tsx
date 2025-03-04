import NavBar from './components/NavBar'

interface Props {
  children: React.ReactNode
  banner: React.ReactNode
}
export default function ProductLayout({ children, banner }: Props) {
  return (
    <div className="border p-5">
      <div className="border p-2 mb-2 border-gray-400">
        <div className="text-lg font-bold">banner 区域</div>

        {banner}
      </div>

      <NavBar />

      <div className="border p-2 mt-2 border-gray-400">
        <div className="text-lg font-bold">产品详情区域</div>

        {children}
      </div>
    </div>
  )
}
