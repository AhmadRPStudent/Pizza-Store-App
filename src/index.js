import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
};

function Menu() {
    const hour = new Date().getHours();
    const openingHours = hour >= 10 && hour < 22;

    const pizzas = [
        {
            photoName: "focaccia.jpg",
            name: "Focaccia",
            ingredients: ["flour", "water", "yeast", "salt", "olive oil"],
            price: 12.99
        },
        {
            photoName: "funghi.jpg",
            name: "Funghi Pizza",
            ingredients: ["mushrooms", "mozzarella", "tomato sauce"],
            price: 14.99
        },
        {
            photoName: "margherita.jpg",
            name: "Margherita Pizza",
            ingredients: ["mozzarella", "tomato sauce", "basil"],
            price: 10.99
        },
        {
            photoName: "prosciutto.jpg",
            name: "Prosciutto Pizza",
            ingredients: ["mozzarella", "tomato sauce", "prosciutto"],
            price: 15.99
        },
        {
            photoName: "salamino.jpg",
            name: "Salamino Pizza",
            ingredients: ["mozzarella", "tomato sauce", "salami"],
            price: 13.99
        },
        {
            photoName: "spinaci.jpg",
            name: "Spinaci Pizza",
            ingredients: ["mozzarella", "tomato sauce", "spinach"],
            price: 11.99
        }
    ];

    return (
        <div className="menu">
            <h2>Our Menu</h2>

            {openingHours && (
                <p>Authentic Italian Cuisine, all from our stone oven</p>
            )}

            {pizzas.map((pizza) => (
                <Pizza
                    key={pizza.name}
                    photoName={pizza.photoName}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                />
            ))}
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <header>
                <h1>Ahmad's Pizza Co.</h1>
            </header>
        </div>
    );
};

function Pizza({photoName, name, ingredients, price}) {
    return (
        <div className="pizza"  >
            <img src={`/pizzas/${photoName}`} alt={name} />
            <h2>{name}</h2>
            <p>{ingredients.join(', ')}</p>
            <p>${price.toFixed(2)}</p>
        </div>
    );
};

function Footer() {
    const hour = new Date().getHours();
    const openingHours = hour >= 10 && hour < 22;
    return (
        <div className="footer">
            {openingHours ?
                <footer>We're currently open!</footer>
                : 
                <footer>We're currently closed.</footer>
            }
            <div className='order'>
                {openingHours ? <>
                <button className='btn'>Order</button> </>
                : 
                <footer>We're currently closed.</footer>
            }
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);