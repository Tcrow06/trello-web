import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import {Card as CardMUI} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

function Card() {
    return ( 
        <CardMUI sx={{ 
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'visible'
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://t3.ftcdn.net/jpg/06/74/72/66/240_F_674726664_cDSI77WVfDn3mxe4MrUJ9MFDbbGP8TIi.jpg"
                title="green iguana"
            />
            <CardContent sx={{
                p: 1.5, '&:last-child': {p: 1.5}
            }}>
                <Typography>
                Quang Thinh
                </Typography>
            </CardContent>
            <CardActions sx ={{
                p: '0 4px 8px 4px'
            }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
            </CardActions>
        </CardMUI>
     );
}

export default Card;