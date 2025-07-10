import { ChangeEvent } from "react"

type CardCountInputProps = {
    id: string,
    min: number,
    max: number
    setValue: (value: number) => void,
    localValue: string,
    setLocalValue: (value: string) => void,
    onBlur?: () => void
}

function CardCountInput({ id, min, max, setValue, localValue, setLocalValue, onBlur }: CardCountInputProps) {



    function handleChange(e: ChangeEvent<HTMLInputElement>) {

        if (e.target.value === "") {
            setLocalValue("")
            setValue(min)
            return
        }

        const newValue = Math.max(min, Math.min(max, parseInt(e.target.value)))
        setLocalValue(newValue.toString())
        setValue(newValue)
    }

    function handleBlur(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value === "") {
            setLocalValue(min.toString())
        }
        onBlur?.()
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