interface TagBadgeProps {
  label: string
  value: string
}

export function TagBadge({ label, value }: TagBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1 bg-blue-mist border border-blue-pale rounded-md px-2 py-1 text-xs font-medium text-blue-deep">
      {label && <span className="text-text-light mr-0.5">{label}</span>}
      {value}
    </div>
  )
}
