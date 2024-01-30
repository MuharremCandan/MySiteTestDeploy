import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Hoş Geldiniz!</h1>
                <p>React ile Oluşturulmuş Basit ve Şık Bir Web Sitesine Hoş Geldiniz.</p>
            </header>

            <main>
                <section>
                    <h2>Hakkımızda</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam aliquam mauris ut odio posuere, vel eleifend sapien
                        tincidunt. Fusce euismod sem ac leo eleifend, et fringilla
                        arcu rhoncus.
                    </p>
                </section>

                <section>
                    <h2>Görsel Galeri</h2>
                    <div className="image-gallery">
                        <img src="https://placekitten.com/300/200" alt="Kitten 1" />
                        <img src="https://placekitten.com/300/201" alt="Kitten 2" />
                        <img src="https://placekitten.com/300/202" alt="Kitten 3" />
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Muharrem Candan</p>
            </footer>
        </div>
    );
};

export default Home;