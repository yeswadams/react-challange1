import { useState, useMemo } from 'react';
import { CssBaseline, Grid, Container, ThemeProvider, createTheme } from '@mui/material';
import {
  DirectionsCar as CarIcon,
  Build as ServiceIcon,
  AttachMoney as RevenueIcon,
  People as CustomersIcon,
} from '@mui/icons-material';
import Layout from './components/Layout';
import StatsCard from './components/StatsCard';
import ServiceChart from './components/charts/ServiceChart';
import RevenueChart from './components/charts/RevenueChart';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
          },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout toggleTheme={toggleTheme} isDarkMode={mode === 'dark'}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {/* Stats Cards */}
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Vehicles"
                value="124"
                icon={<CarIcon />}
                color="#1976d2"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Active Services"
                value="28"
                icon={<ServiceIcon />}
                color="#2e7d32"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Monthly Revenue"
                value="$45,290"
                icon={<RevenueIcon />}
                color="#ed6c02"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Customers"
                value="892"
                icon={<CustomersIcon />}
                color="#9c27b0"
              />
            </Grid>

            {/* Charts */}
            <Grid item xs={12} md={6}>
              <ServiceChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <RevenueChart />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
