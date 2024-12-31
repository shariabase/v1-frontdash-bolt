"use client"

import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { useColorStore } from "@/lib/stores/color-store"

const colorFormSchema = z.object({
  color: z.enum(["magenta", "green", "yellow"], {
    required_error: "Please select a color theme.",
  }),
})

type ColorFormValues = z.infer<typeof colorFormSchema>

const colors = {
  magenta: {
    label: "Magenta",
    value: "magenta",
    hsl: "311 82% 41%",
    preview: "bg-[hsl(311,82%,41%)]"
  },
  green: {
    label: "Green",
    value: "green",
    hsl: "142 76% 36%",
    preview: "bg-[hsl(142,76%,36%)]"
  },
  yellow: {
    label: "Yellow",
    value: "yellow",
    hsl: "48 96% 53%",
    preview: "bg-[hsl(48,96%,53%)]"
  }
}

export function ColorForm() {
  const { color, setColor } = useColorStore()

  const form = useForm<ColorFormValues>({
    resolver: zodResolver(colorFormSchema),
    defaultValues: {
      color: color,
    },
  })

  useEffect(() => {
    const root = document.documentElement
    const hsl = colors[color].hsl
    root.style.setProperty("--primary", hsl)
    root.style.setProperty("--ring", hsl)
  }, [color])

  function onSubmit(data: ColorFormValues) {
    setColor(data.color)
    toast.success("Color theme updated")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Color Theme</FormLabel>
              <FormDescription>
                Choose the primary color for the interface.
              </FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid max-w-md grid-cols-3 gap-8 pt-2"
                >
                  {Object.entries(colors).map(([key, color]) => (
                    <FormItem key={key}>
                      <FormControl>
                        <RadioGroupItem value={color.value} className="sr-only" />
                      </FormControl>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                          <div className={`h-16 w-full rounded-sm ${color.preview}`} />
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          {color.label}
                        </span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Update color theme</Button>
      </form>
    </Form>
  )
}