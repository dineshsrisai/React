import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
        <header className="header">
            <img className="image" src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"/>
            <div className="search-and-user">
                <i className="fas fa-search"></i>
                <i className="fa-solid fa-user" id="logo"></i>
            </div>
        </header>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);