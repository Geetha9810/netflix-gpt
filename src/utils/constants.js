export const LOGO =
  "https://i.pinimg.com/736x/09/f7/39/09f739cb30ca8a17f1a655cadd0f76a4.jpg";

export const USER_AVATAR =
  "https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization:
    //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZiMzhlOWIwZWJiZDU4YjZkM2I4MGMyZjQ0YjU4NiIsIm5iZiI6MTczNDUzMDc4NC4yNDE5OTk5LCJzdWIiOiI2NzYyZDZlMGNjMmI2ZDlmY2NhYWZlOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t4ZA5QJw-Yr5NkMOnDedDfrAsCNVKEFHYoROSxLKxhw",
    // process.env.REACT_APP_TMDB_KEY,

    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://images.reporteindigo.com/wp-content/uploads/2021/05/netflix-junio.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY =
//   "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";
//"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";

//process.env.REACT_APP_OPENAI_KEY;

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
