import classNames from "classnames"

interface ButtonTabsProps {
  title: string,
  active?: boolean
}

export default function ButtonTabs(props: ButtonTabsProps) {
  const {title, active} = props
  const classButton = classNames({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active
  })
  return (
    <a data-filter="*" href="#" className={classButton}>{title}</a>
  )
}
