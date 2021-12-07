import React, {useState} from 'react';
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь"},
        {id: 1, value: 3, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"}
    ]

    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
    }
    const handleIncrement = (id) => {
        let newCounters = [...counters]
        newCounters[id].value += 1
        setCounters(newCounters)

        // setCounters(
        // const countersNew = counters.map((counter, id) => (
        //         counter.id === id ? counter.value += 1 : counter
        //     )
        // )
        // setCounters(countersNew)

    }
    const handleDecrement = (id) => {
        let newCounters = [...counters]
        newCounters[id].value -= 1
        setCounters(newCounters)
    }
    return (
        <>
            {counters.map(count => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}>Сброс
            </button>

        </>
    );
};

export default CountersList;
