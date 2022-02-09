import {useState} from 'react';
import {
  Card,
  CardMedia,
  TextField,
  Button

} from '@mui/material';
import {makeStyles} from '@mui/styles';
import './App.css';
const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    padding: 10,
    margin: 10
  }
})
 const App = ({UserData})=> {
   const {userName, imageUrl, posts} = UserData;
   const classes = useStyles();
   const [post, setPost] =useState('');
   const [allPosts, setAllPosts] = useState(posts);
   const addPost = (post) => { setAllPosts(allPosts.concat(post))}
  
  return (
    
    <div className='app'>
      <TextField
      multiline
      rows={26}
      label='Create a new post'
      varient='outlined'
      onChange={(e) => setPost(e.target.value)}
      value={post}
      />
      <Button
      onClick={(e)=>{
        e.preventDefault();
        addPost(post);
      }}>
        Save
        </Button>
    {allPosts.map((post,index) => <Card 
    className={classes.card}
    variant='outlined'
    key={index}>
    <CardMedia
    component='img'
    image={imageUrl}
    alt={userName}
    />
    {userName}{post}</Card>)}
    </div>
    
  );
}

export default App;
