"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Users, Brain } from "lucide-react"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Brain, value: "50+", label: "AI Models" },
    { icon: Rocket, value: "99.9%", label: "Uptime" }
  ]

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59")

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const shouldReduceMotion = useReducedMotion()

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedContainer delay={0.2} className="mb-12">
            <div className="inline-flex gap-8 bg-muted/50 backdrop-blur-sm rounded-lg p-6">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-4xl font-bold bg-background/50 rounded-lg px-4 py-2">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.4}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              The Future of{" "}
              <span className="text-primary">Islamic Finance</span> is Here
            </h1>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.6}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven Shariah-compliant financial solutions.
              Built for the modern world, guided by timeless principles.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.8} className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="min-w-[200px]" asChild>
                <Link href="/launchapp">
                  Launch App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              By clicking Save my spot you're confirming that you agree with our{" "}
              <a href="/terms" className="underline hover:text-primary">
                Terms and Conditions
              </a>
            </p>
          </AnimatedContainer>
          
          <AnimatedContainer delay={1} className="mt-16">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  )
}