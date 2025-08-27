// const page_req_api_url = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=43a36acaf39ddefff867563e1123df7c&language=en-US';

// const movieDetails = async (req, res) =>{
//     try{
//         const movie_id = req.params.id;
//         const apiUrl = page_req_api_url.replace('{movie_id}', movie_id);

//         const movie = await fetch(`${apiUrl}`).then(response => response.json());

//         res.status(200).json(movie);
//     }
//     catch(error){
//         console.error("Error fetching movies:", error);
//         res.status(500).json({message: error.message});
//     }
// };

// export {
//     movieDetails
// };

const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "43a36acaf39ddefff867563e1123df7c";

const movieDetails = async (req, res) => {
    try {
        const movie_id = req.params.id;

        // Build API URLs
        const detailsUrl = `${baseUrl}/${movie_id}?api_key=${apiKey}&language=en-US`;
        const recommendationsUrl = `${baseUrl}/${movie_id}/recommendations?api_key=${apiKey}&language=en-US`;

        // Fetch movie details and recommendations in parallel
        const [details, recommendations] = await Promise.all([
            fetch(detailsUrl).then(res => res.json()),
            fetch(recommendationsUrl).then(res => res.json())
        ]);

        // Send combined response
        res.status(200).json({
            "movie_details": details,
            recommendations: recommendations.results || [] // only return the list of movies
        });
    } catch (error) {
        console.error("Error fetching movie data:", error);
        res.status(500).json({ message: error.message });
    }
};

export { movieDetails };
