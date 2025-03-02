import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Badge,
  Stack,
  Tooltip,
  Divider,
  Button,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  DirectionsCar as VehicleIcon,
  Build as ServiceIcon,
  People as CustomersIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

const Layout = ({ children, toggleTheme, isDarkMode }) => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Vehicles', icon: <VehicleIcon />, path: '/vehicles' },
    { text: 'Services', icon: <ServiceIcon />, path: '/services' },
    { text: 'Customers', icon: <CustomersIcon />, path: '/customers' },
  ];

  const secondaryMenuItems = [
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help & Support', icon: <HelpIcon />, path: '/help' },
  ];

  // Mock user data (replace with actual user data in production)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    notifications: 3,
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${open ? drawerWidth : 0}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Tooltip title="Toggle theme">
              <IconButton onClick={toggleTheme} color="inherit">
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <Badge badgeContent={user.notifications} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {user.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{ width: 40, height: 40 }}
              />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : theme.palette.primary.main,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        open={open}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(3),
            ...theme.mixins.toolbar,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DirectionsCar sx={{ fontSize: 32 }} />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              AutoService
            </Typography>
          </Box>
          <IconButton onClick={() => setOpen(!open)} sx={{ color: 'white' }}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Main Menu */}
        <List sx={{ py: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: 'medium'
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Secondary Menu */}
        <List sx={{ py: 2 }}>
          {secondaryMenuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: 'medium'
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Marketing Section */}
        <Box
          sx={{
            mt: 'auto',
            p: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <StarIcon sx={{ color: '#FFD700' }} />
            <Typography variant="subtitle2" sx={{ color: 'white' }}>
              PRO Features
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
            Upgrade to PRO for advanced analytics, custom reports, and priority support.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: theme.palette.mode === 'dark' ? '#1e1e1e' : theme.palette.primary.main,
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            Upgrade Now
          </Button>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
