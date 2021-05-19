import React from 'react';

function App(props) {
    return (
        <div className="app">
            <div className="header">
                Список дел
            </div>
            <div className="form">
                <input type="text" />
                <button />
            </div>
            <div className="todos">
                <div className="todo">
                    <div className="fovorite">
                      <span>  * </span>
                    </div>
                    <div className="todo-text">
                        Купить бананы
                    </div>
                    <div className="actions">
                        <span>x</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;