// Board details 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import ModeSelect from '../../components/ModeSelect';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';
import AppBar from '../../components/AppBar';
function Board() {
    return (
        <Container disableGutters maxWidth='false' sx={{height:'100vh', bgcolor: '#cfe8fc'}}>      
        <AppBar/>
        <BoardBar />
        <BoardContent/>
        </Container>
    )
}

export default Board;