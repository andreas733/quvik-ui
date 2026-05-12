import type { ImgHTMLAttributes } from 'react'

type LogoVariant = 'white' | 'black' | 'color' | 'color-bg'

const LOGO_PATHS: Record<LogoVariant, string> = {
  white: '/quvik-ui/logo-white.svg',
  black: '/quvik-ui/logo-black.svg',
  color: '/quvik-ui/logo-color-no-bg.svg',
  'color-bg': '/quvik-ui/logo-color-bg.svg',
}

export interface QuvikLogoProps
  extends Pick<ImgHTMLAttributes<HTMLImageElement>, 'className' | 'alt'> {
  variant?: LogoVariant
}

export function QuvikLogo({
  variant = 'white',
  className,
  alt = 'Quvik',
}: QuvikLogoProps) {
  return (
    <img
      src={LOGO_PATHS[variant]}
      alt={alt}
      className={className}
      draggable={false}
    />
  )
}
