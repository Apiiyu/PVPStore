import classNames from "classnames"

interface ButtonTabsProps {
  title: string,
  active?: boolean,
  onClick: () => void,
}

export default function ButtonTabs(props: ButtonTabsProps) {
  const {title, active, onClick} = props
  const classButton = classNames({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active
  })
  return (
    <button type="button" onClick={onClick} className={classButton}>{title}</button>
  )
}
