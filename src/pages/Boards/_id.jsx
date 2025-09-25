// Board details 
import Container from '@mui/material/Container'
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
import AppBar from '~/components/AppBar/AppBar';

import { mockData } from '~/apis/mock-data'
function Board() {
    return (
        <Container disableGutters maxWidth='false' sx={(theme) => ({height:'100vh', bgcolor: theme.palette.background.default})}>      
            <AppBar/>
            <BoardBar board={mockData?.board}/>
            <BoardContent board={mockData?.board}/>
        </Container>
    )
}

export default Board;