"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
}

export function AnimatedContainer({ 
  children, 
  delay = 0,
  className,
  ...props 
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}