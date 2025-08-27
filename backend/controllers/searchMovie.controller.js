const baseSearchUrl = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '43a36acaf39ddefff867563e1123df7c';

const search = async (req, res) => {
    try {
        const query = req.params.name;          // movie name from route param
        const pageNumber = req.query.page || 1; // page number from query string (default = 1)

        const url = `${baseSearchUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${pageNumber}`;

        const result = await fetch(url).then(response => response.json());

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ message: error.message });
    }
};

export { search };
