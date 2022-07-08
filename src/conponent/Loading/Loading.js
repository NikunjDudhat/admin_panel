import React from 'react';
import './loading.css'

function Loading(props) {
    return (
        <div className='loading_content'>
            <div class="multi-spinner-container">
                <div class="multi-spinner">
                    <div class="multi-spinner">
                    <div class="multi-spinner">
                        <div class="multi-spinner">
                        <div class="multi-spinner">
                            <div class="multi-spinner">
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