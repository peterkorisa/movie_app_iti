const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "43a36acaf39ddefff867563e1123df7c";

const movieDetails = async (req, res) => {
    try {
        const movie_id = req.params.id;

        // Build API URLs
        const detailsUrl = `${baseUrl}/${movie_id}?api_key=${apiKey}&language=en-US`;

        // Fetch movie details
        const details = await fetch(detailsUrl).then(res => res.json());

        // Send combined response
        res.status(200).json(details);
    } 
    catch (error) {
        console.error("Error fetching movie data:", error);
        res.status(500).json({ message: error.message });
    }
};

export { movieDetails };
