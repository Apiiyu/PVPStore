interface RowProps {
  label: string,
  value: string|number,
  customClass?: string
}

export default function Row(props: Partial<RowProps>) {
  const {label, value, customClass} = props
  return (
    <p className="text-lg color-palette-1 mb-20">{label}
      <span className={`purchase-details ${customClass}`}>{value}</span>
    </p>
  )
}
