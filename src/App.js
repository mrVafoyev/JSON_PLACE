import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from './settings/reducers/Users/usersSlice';
import styled from 'styled-components';
import { getUsersList } from './settings/reducers/Users/usersThunk/usersThunk';
import { getUserById } from './settings/reducers/userSlice/userThunks/userThunk';
import { getPostsList } from './settings/reducers/postsSlice/postsThunk/postsThunk';
import { getPostById } from './settings/reducers/postSlice/postThunk/postThunk';
import { getPhotos } from './settings/reducers/photosSlice/photosThunk/photosThunk';
import { getPhotoById } from './settings/reducers/photoSlice/photoThunk/photoThunk';

const Wrapper=styled.main` 
background: ${(props)=>props.theme=='true'?'darkblue':"grey"};
width: 100%;
height: 100vh;
`

function App() {
  
  
  const dispatch=useDispatch()
  dispatch(getUsersList())
  dispatch(getUserById(3))
  dispatch(getPostsList())
  dispatch(getPostById(5))
  dispatch(getPhotos())
  dispatch(getPhotoById(5))
  
  


  return (
    
        <Wrapper className='wrapper' id='wrapper'  >
        
        </Wrapper>
  );
}

export default App;
