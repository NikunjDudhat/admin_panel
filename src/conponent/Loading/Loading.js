import React from 'react';
import './loading.css'

function Loading(props) {
    return (
        <div className='loading_content'>
            <div className="multi-spinner-container">
                <div className="multi-spinner">
                    <div className="multi-spinner">
                    <div className="multi-spinner">
                        <div className="multi-spinner">
                        <div className="multi-spinner">
                            <div className="multi-spinner">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;