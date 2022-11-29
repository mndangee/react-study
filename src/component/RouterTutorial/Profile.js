import { useParams } from 'react-router-dom';

const data = {
  minhye: {
    name: '김민혜',
    description: '눈누 난나',
  },
  effie: {
    name: '김에피',
    description: '룰루 랄라',
  },
};

//React Router v5
// const Profile = ({match}) => {
//   const { username } = match.params;
//   const profile = data[username];

//   return (
//     <>
//       {profile ? (
//         <div>
//           <h3>
//             {username}({profile.name})
//           </h3>
//           <p>{profile.description}</p>
//         </div>
//       ) : (
//         <div>존재하지 않는 사용자입니다.</div>
//       )}
//     </>
//   );
// };

//React Router v6
const Profile = () => {
  //비구조화 할당으로 username 변수에 useParams의 객체를 할당 | useParams() 객체를 반환
  const { username } = useParams();
  const profile = data[username];

  return (
    <>
      {profile ? (
        <div>
          <h3>
            {username}({profile.name})
          </h3>
          <p>{profile.description}</p>
        </div>
      ) : (
        <div>존재하지 않는 사용자입니다.</div>
      )}
    </>
  );
};

export default Profile;
