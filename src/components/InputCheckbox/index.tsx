import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked: initialCheck = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const [checked, setChecked] = useState(initialCheck)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          setChecked(!checked);
          onChange(!checked);
        }}
      />
    </div>
  )
}
