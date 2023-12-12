//DOMContentLoaded yra įvykis, kuris įvyksta, kai visas HTML yra įkeltas ir paruoštas manipuliacijoms su JavaScript. Tai reiškia, kad visi HTML elementai yra pasiekiami ir galima pradėti vykdyti JavaScript kodą, kuris manipuliuoja DOM (Document Object Model).
document.addEventListener('DOMContentLoaded', function () {
    // Gauna citatas iš API
    fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Randa Carouseles elementus
            const carouselIndicators = document.querySelector('.carousel-indicators');
            const carouselInner = document.querySelector('.carousel-inner');

            // Eina per kiekvieną citatą ir sukuria atitinkamus Carouseles elementus
            data.forEach((quote, index) => {
                // Sukuria mygtuką indikatoriui
                const indicator = document.createElement('button');
                indicator.setAttribute('type', 'button');
                indicator.setAttribute('data-bs-target', '#carouselExampleDark');
                indicator.setAttribute('data-bs-slide-to', index.toString());   //toString setAtribute metodui, kuris priima tik tekstines reikšmes, kad būtų nustatytas data-bs-slide-to atributas.
                if (index === 0) {
                    indicator.classList.add('active'); //prideda klasę
                }
                carouselIndicators.appendChild(indicator); //įdeda indicatoriaus mygtuką

                // Sukuria Carouseles elementą
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }

                // Pildo Carouseles turinį citatos informacija
                carouselItem.innerHTML = `                    
                        <div class="d-flex align-items-start">
                            <img class="" src="img/1.jpg" alt="girl">
                            <h5><i class="fa-solid fa-quote-left"></i>${quote.quote}</h5>
                        </div>                    
                        <p>— ${quote.author}</p>                    
                `;
                carouselInner.appendChild(carouselItem); //įdeda caruseles itemą
            });
        })
        .catch(error => {
            console.error('Klaida gaunant citatas:', error)
        });
});
