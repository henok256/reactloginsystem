import React from 'react';

const Hero=({handleLogout})=>{
    return(
        <section className="hero">
            <nav>
                <h1>Home Page</h1>
                <br></br>
                <button onClick={handleLogout}>Logout</button>
            </nav>

        </section>
    );
};
 export default Hero;