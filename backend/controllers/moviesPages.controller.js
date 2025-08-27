const page_req_api_url = 'https://api.themoviedb.org/3/discover/movie?api_key=43a36acaf39ddefff867563e1123df7c&include_adult=false&include_video=false&language=tl&sort_by=popularity.desc&page=';

const page = async (req, res) =>{
    try{
        const page_number = 1;
        const page = await fetch(`${page_req_api_url}${page_number}`).then(response => response.json());

        res.status(200).json(page);

    }
    catch(error){
        console.error("Error fetching movies:", error);
        res.status(500).json({message: error.message});
    }
};
const pageNumber = async (req, res) =>{
    try{
        const page_number = req.params.id;
        const page = await fetch(`${page_req_api_url}${page_number}`).then(response => response.json());

        res.status(200).json(page);

    }
    catch(error){
        console.error("Error fetching movies:", error);
        res.status(500).json({message: error.message});
    }
};

export {
    page,
    pageNumber
};