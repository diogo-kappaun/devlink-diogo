export function Button({ ...props }) {
  return (
    <a
      {...props}
      className="flex items-center justify-center gap-2 rounded-sml border border-zinc-700 px-6 py-button text-csm text-zinc-950 transition-opacity duration-300 hover:opacity-90 dark:text-zinc-100"
    />
  )
}
