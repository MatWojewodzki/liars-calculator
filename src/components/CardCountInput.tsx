import { ChangeEvent, useState } from "react"

function CardCountInput({ id, min, value, setValue }: { id: string, min: number, value: number, setValue: (value: number) => void }) {

    const [localValue, setLocalValue] = useState(value.toString())

    function handleChange(e: ChangeEvent<HTMLInputElement>) {

        if (e.target.value === "") {
            setLocalValue("")
            setValue(min)
            return
        }

        const newValue = Math.max(min, Math.min(23, parseInt(e.target.value)))
        setLocalValue(newValue.toString())
        setValue(newValue)
    }

    function handleBlur(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value === "") {
            setLocalValue(min.toString())
        }
    }

    return (
        <input
            className="w-12 p-1 rounded-md border-b-4 border-x-2 border-t-2 border-neutral-200"
            id={id}
            type="number"
            step={1}
            pattern="[0-9]*"
            value={localValue}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    )
}

export default CardCountInput