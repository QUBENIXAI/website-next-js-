"use client"
import { cloneElement, isValidElement, type ReactElement } from "react"
import { motion } from "motion/react"
export default function IconCraft({ icon }: { icon: React.ReactNode }) {
    const sizedIcon = isValidElement(icon)
        ? cloneElement(icon as ReactElement<{ className?: string }>, {
              className: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-500",
          })
        : icon
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-11 w-11 sm:h-13 sm:w-13 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-md bg-gradient-to-t from-[#0E62FF] to-[#CFE3FF]"
        >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-md bg-white p-2">
                {sizedIcon}
            </div>
        </motion.div>
    )
}