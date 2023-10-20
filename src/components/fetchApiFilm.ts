import axios from "axios";

// export function fetchData(setDatas:any) {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&include_video=true&api_key=194ce4da0cfba52c1bdb1078179b6d85"
//       )
//       .then((response) => {
//         setDatas(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }
  
// export const fetchData = async (page:number) => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc&include_video=true&api_key=194ce4da0cfba52c1bdb1078179b6d85`
//   );
//   setDatas(response.data.results);
//   setTotalPages(Math.ceil(response.data.total_results / itemsPerPage));
// };
