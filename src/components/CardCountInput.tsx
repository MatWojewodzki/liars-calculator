function CardCountInput({ id, value, setValue }: { id: string, value: number, setValue: (value: number) => void }) {
    return (
        <input
            type="number"
            id={id}
            min="1"
            max="23"
            step="1"
            value={value}
            onChange={(e) => setValue(e.target.value ? e.target.valueAsNumber : 1)}
        />
    )
}

export default CardCountInput