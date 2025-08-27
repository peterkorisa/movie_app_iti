const fetch = require('node-fetch');

exports.getRecommendations = async (req, res) => {
    const movieId = req.params.movieId;
    const apiKey = '43a36acaf39ddefff867563e1123df7c';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch recommendations' });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
