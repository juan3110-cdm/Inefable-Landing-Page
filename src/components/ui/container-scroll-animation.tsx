import { useRef, useState, useEffect, type ReactNode } from 'react'
import { useScroll, useTransform, motion, type MotionValue } from 'motion/react'

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | ReactNode
  children: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleDimensions = isMobile ? [0.7, 0.9] : [1.05, 1]

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions)
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="flex items-center justify-center relative p-2 md:p-20"
      style={{ minHeight: '60rem' }}
      ref={containerRef}
    >
      <div className="py-10 md:py-24 w-full relative" style={{ perspective: '1000px' }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

function Header({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: ReactNode }) {
  return (
    <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  )
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  children: ReactNode
}) {
  return (
    <motion.div
      style={{
        borderColor: '#3a3a46',
        background: '#1a1a24',
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[26rem] md:h-[36rem] w-full border-4 p-2 md:p-6 rounded-[30px]"
    >
      <div
        className="h-full w-full overflow-hidden rounded-2xl md:rounded-2xl md:p-4"
        style={{ background: '#0c0c14' }}
      >
        {children}
      </div>
    </motion.div>
  )
}
