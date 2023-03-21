import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="font-md text-[#f1f1f1] mt-12">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader