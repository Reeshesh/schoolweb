import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import user from './img/avatar.png'
import home from './img/Vector (3).png'
import hw from './img/Note.png'
import video from './img/Video.png'
import notes from './img/Notes.png'
import books from './img/Document Pdf.png'
import routine from './img/ic_baseline-subject.png'
import attendance from './img/registration.png'
import calendar from './img/ant-design_calendar-outlined.png'
import bus from './img/Bus.png'
import course from './img/ep_video-play.png'
import education from './img/graduate.png'
import info from './img/info.png'
import paid from './img/payment 1.png'
import credit from './img/Layer 2.png'
import grade from './img/grade.png'
import report from './img/Vector (4).png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const Header = () => {
  const [searchShow, setsearchShow] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const searchExpand = () => {
    setsearchShow(current => !current);
  }

  return (
    <div>
      <AppBar position="static" className="bg-white">
        <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Avatar src="https://avatars.githubusercontent.com/u/86892846?v=4" alt="" />
            <Box pl='1.5rem' sx={{display: {
                xs: searchShow ? 'none' : 'block',
                sm: 'block'
              } 
            }}>
              <Typography
                variant="subtitle1"
                component="div"
                color="#226CE0"
                fontWeight="600"
              >
                Welcome Student
              </Typography>
              <Box display="flex" sx={{ justifyContent: "center" }}>
                <Typography
                  fontSize="12px"
                  component="div"
                  sx={{ pr: "0.5rem" }}
                >
                  July 26, 2022
                </Typography>
                <Typography fontSize="12px" component="div">
                  5:10 P.M
                </Typography>
              </Box>
            </Box>

            <Box>
              <Toolbar sx={{ px: "0px" }}>
                <form action="">
                  <Search>
                      <IconButton onClick={searchExpand} className='header-icon'>
                        <SearchIcon fontSize="small"/>
                      </IconButton>
                      <StyledInputBase id="search-input"
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }} style={{display: searchShow ? 'block' : 'none'}}
                      />
                  </Search>
                </form>
                <IconButton className='header-icon'>
                  <NotificationsIcon fontSize="small"/>
                </IconButton>
                
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                   className='header-icon'
                >
                  <MenuIcon fontSize="small"/>
                </IconButton>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: '300px',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: '300px',
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <Avatar src={user}/>
          <Typography>Ram Shrestha</Typography>
          <IconButton onClick={handleDrawerClose}>
              <ChevronRight/>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{mx: '1rem'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={home} alt="home-icon"   />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={hw} alt="homework-icon"   />
                </ListItemIcon>
                <ListItemText>Homework</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={video} alt="online-icon"   />
                </ListItemIcon>
                <ListItemText>Online Class</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={notes} alt="notes-icon"   />
                </ListItemIcon>
                <ListItemText>Notes</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={books} alt="books-icon"   />
                </ListItemIcon>
                <ListItemText>Books</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={routine} alt="routine-icon"   />
                </ListItemIcon>
                <ListItemText>Routine</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={attendance} alt="attendance-icon"   />
                </ListItemIcon>
                <ListItemText>Attendance</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={calendar} alt="calendar-icon"   />
                </ListItemIcon>
                <ListItemText>Calendar</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={bus} alt="Transportation-icon"   />
                </ListItemIcon>
                <ListItemText>Transportation</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={course} alt="course-icon"   />
                </ListItemIcon>
                <ListItemText>Course Video</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={education} alt="education-icon"   />
                </ListItemIcon>
                <ListItemText>Previous Education</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={info} alt="Information-icon"   />
                </ListItemIcon>
                <ListItemText>Information</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={paid} alt="paid-icon"   />
                </ListItemIcon>
                <ListItemText>Fee Paid</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={credit} alt="credit-icon"   />
                </ListItemIcon>
                <ListItemText>Credit Fee</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={grade} alt="grade-icon"   />
                </ListItemIcon>
                <ListItemText>Grade Sheet</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding sx={{ py: '1.5rem'}}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={report} alt="report-icon"   />
                </ListItemIcon>
                <ListItemText>Report a Problem</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{px: '0rem'}}>
              <img src="ensite_logo_SVG.svg" alt="ensite-logo" />
              <ListItemText className="product" sx={{pl: '1rem'}}>A product of Digital & Beyond</ListItemText>
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
export default Header;
