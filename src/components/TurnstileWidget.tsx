'use client'

import { useEffect, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

export interface TurnstileWidgetProps {
  onSuccess: (token: string) => void
  onError?: () => void
  onExpire?: () => void
  theme?: 'light' | 'dark' | 'auto'
}

export function TurnstileWidget({
  onSuccess,
  onError,
  onExpire,
  theme = 'light',
}: TurnstileWidgetProps) {
  const warnedRef = useRef(false)

  useEffect(() => {
    if (
      typeof process !== 'undefined' &&
      process.env.NODE_ENV !== 'production' &&
      !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
      !warnedRef.current
    ) {
      warnedRef.current = true
      console.warn(
        '[@quvik/ui TurnstileWidget] NEXT_PUBLIC_TURNSTILE_SITE_KEY is undefined. ' +
          'Set it in your app environment (e.g. Vercel)',
      )
    }
  }, [])

  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onSuccess={onSuccess}
      onError={onError}
      onExpire={onExpire}
      options={{ theme }}
    />
  )
}
