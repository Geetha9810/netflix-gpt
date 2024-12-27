export const LOGO =
  "https://i.pinimg.com/736x/09/f7/39/09f739cb30ca8a17f1a655cadd0f76a4.jpg";

export const USER_AVATAR =
  "https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
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

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
