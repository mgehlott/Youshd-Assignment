import React from 'react'
import TodoList from './TodoList';
import filterImg from '../../assets/filter.png';
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import statuses from '../../data/status';

function MainpageContent() {

    const [todo, setTodo] = useState([]);
    // const [inProgresstodo, setInProgresssTodo] = useState([]);
    // const [completedTodo, setcompletedTodo] = useState([]);
    const onDrop = (item, status, monitor) => {
        setTodo(prev => {
            const newItems = prev.filter(i => i.id !== item.id)
                .concat({ ...item, status });
            return [...newItems];
        });
    }

    const moveItem = (dragIndex, hoverIndex) => {
        const item = todo[dragIndex];
        setTodo(prevs => {
            const newItems = prevs.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        })
    }

    const todoAddHandler = (item) => {
        setTodo(pre => {
            return [...pre, item];
        });
    }
    // const progressAddHandler = (item) => {
    //     setInProgresssTodo(pre => {
    //         return [...pre, item];
    //     });
    // }
    // const completeTodoAddHandler = (item) => {
    //     setcompletedTodo(pre => {
    //         return [...pre, item];
    //     });
    // }


    return (
        <>
            <div className='content-header'>
                <p>Projects</p>
                <button className='filter_btn'><img src={filterImg} /> Filter</button>
            </div>

            <div className='content'>
                {statuses.map(s => {
                    return (

                        <TodoList
                            key={s.status}
                            containerTitle={s.status}
                            items={todo}
                            addItem={todoAddHandler}
                            onDrop={onDrop}
                            status={s.status}
                            moveItem={moveItem}

                        />
                    )
                })}
            </div>
        </>
    )
}

export default MainpageContent;
