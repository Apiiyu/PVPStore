import NumberFormat from "react-number-format"

interface RowProps {
  label: string,
  value: string|number,
  customClass?: string
}

export default function Row(props: Partial<RowProps>) {
  const {label, value, customClass} = props
  return (
    <p className="text-lg color-palette-1 mb-20">{label}
      {typeof value === 'number' ? (
        <NumberFormat value={value} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator=","/>
      ) : (
        <span className={`purchase-details ${customClass}`}> {value} </span>
      )
    }
    </p>
  )
}
