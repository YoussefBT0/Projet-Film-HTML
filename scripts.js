    fetch('./data.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        const app = document.getElementById('app');

        data.forEach((movie) => {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie';

            movieDiv.innerHTML = `
                <div class="image-container">
                    <img src="${movie.image}" alt="${movie.title}"/>
                </div>
                <div class="info-container">
                    <p>${movie.title}</p>
                    <p class="director"> ${movie.director}</p>
                    <div class ="bottom-container"> 
                        <button class="view-button">View</button>
                        <p class="japanese-title">${movie.original_title}</p>
                    </div>
                </div>
            `;

            app.appendChild(movieDiv);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
