declare namespace JSX {
  interface IntrinsicElements {
    'micro-app': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name?: string
        url?: string
        baseroute?: string
        data?: any
        onDataChange?: (e: CustomEvent) => void
      },
      HTMLElement
    >
  }
}
