const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "43a36acaf39ddefff867563e1123df7c";

const movieRecommendations = async (req, res) => {
    try {
        const movie_id = req.params.id;

        // Build API URLs
        const recommendationsUrl = `${baseUrl}/${movie_id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
        
        // Fetch movie recommendations
        const recommendations = await fetch(recommendationsUrl).then(res => res.json());

        // Send combined response
        res.status(200).json({ recommendations });
    } 
    catch (error) {
        console.error("Error fetching movie data:", error);
        res.status(500).json({ message: error.message });
    }
};

export { movieRecommendations };
