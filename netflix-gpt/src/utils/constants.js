export const NETFLIX_LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
    "https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXTZ87gWedgajar1VOIJQNIy2U1sulesgGCIouHnReQp2bCq_rcl2zhI9rRDXIzT_X7240ZzVOcfMQ1DXAPdFsyGu2QeFd8.png?r=145";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};

export const MOVIE_IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const NETFLIX_LOGIN_BACKGROUND =
    "https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg";

export const SUPPORTED_LANGUAGES = [
    {
        identifier: "en",
        name: "English",
    },
    {
        identifier: "hindi",
        name: "Hindi",
    },
    {
        identifier: "spanish",
        name: "Spanish",
    },
];

export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;

//https://console.groq.com/docs/quickstart
export const GROG_AI_API_KEY = process.env.REACT_APP_GROG_AI_API_KEY;
