import { PageLayout } from "../../components/Header/PageLayout";
import { getCarAPI } from "../api/api";
import { useRouter } from "next/router";

 export default function Profile() {
  const router = useRouter();
  console.log(router.query.post)
 
  return <div>Не прошло</div>
}

// Number.getInitialProps = async ({ query, req }) => {
//     if (!req) {
//         return { history: null }
//     }
//     try {
//         const response = await getCarAPI.byNumber(query.number);
//         return {
//             props: {
//                 history: response.data
//             }
//         }
//     } catch (e) {
//         const codeError = 'otherError';
//         e.response && (codeError = '404Error')
//         return {
//             props: {
//                 error: codeError,
//                 history: 'error'
//             }
//         }
//     }
// }