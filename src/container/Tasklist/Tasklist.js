import React, { useContext } from 'react';
import { TaskContext } from './TaskContextProvider';

function Tasklist(props) {
    const { tasks } = useContext(TaskContext)
    return tasks.length ? (
        <div>
            {
                tasks.map(tasks => {
                    return (
                        <>
                            <h2>{tasks.id}</h2>
                            <h4>{tasks.title}</h4>
                            <p>{tasks.priority}</p>
                        </>
                    )
                })
            }
        </div>
    ) : 
    (
        <div>No Books Found</div>
    )
}

export default Tasklist;