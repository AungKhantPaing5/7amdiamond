"use client"

import type { ReactNode } from "react"

/**
 * Global provider for the **design-only** version.
 * No authentication – just returns the children as-is.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>
}
