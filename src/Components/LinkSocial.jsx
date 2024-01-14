export function LinkSocial({ ...props }) {
  return (
    <a
      {...props}
      target="_blank"
      className="flex items-center justify-center gap-2 text-csm text-zinc-950 transition-opacity duration-300 hover:opacity-80 dark:text-zinc-100"
    />
  )
}
