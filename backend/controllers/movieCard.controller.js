const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "43a36acaf39ddefff867563e1123df7c";

const movieCard = async (req, res) => {
  try {
    const movie_id = req.params.id;

    // Build API URL
    const detailsUrl = `${baseUrl}/${movie_id}?api_key=${apiKey}&language=en-US`;

    // Fetch movie details
    const details = await fetch(detailsUrl).then(res => res.json());

    // Extract only needed fields
    const result = {
      id: details.id,
      poster_path: details.poster_path,
      title: details.title,
      release_date: details.release_date,
      vote_average: details.vote_average
    };

    // Send response
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    res.status(500).json({ message: error.message });
  }
};

export { movieCard };
