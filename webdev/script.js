    let movies = [];

        const input = document.getElementById('input');
        const addmov = document.getElementById('add');
        const clearli = document.getElementById('clear');
        const list = document.getElementById('list');
        const total = document.getElementById('total');

        function addMovie() {
            const movieName = input.value.trim();
            if (movieName === "") {
                alert("Please enter a movie name!");
                return;
            }
            movies.push(movieName);
            input.value = ""; 

            updateMovieList();
        }

        function updateMovieList() {
            list.innerHTML = "";
            movies.forEach((movie, index) => {
                const li = document.createElement("li");
                li.textContent = movie;
                li.onclick = () => removeMovie(index); 
                list.appendChild(li);
            });
            total.textContent = movies.length;
        }

        function removeMovie(index) {
            movies.splice(index, 1); 
            updateMovieList(); 
        }

        function clearList() {
            movies = []; 
            updateMovieList(); 
        }

        addmov.addEventListener('click', addMovie);
        clearli.addEventListener('click', clearList);