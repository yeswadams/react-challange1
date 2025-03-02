import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

const data = [
  { name: 'Mon', services: 4 },
  { name: 'Tue', services: 3 },
  { name: 'Wed', services: 6 },
  { name: 'Thu', services: 4 },
  { name: 'Fri', services: 7 },
  { name: 'Sat', services: 5 },
  { name: 'Sun', services: 2 },
];

const ServiceChart = () => {
  return (
    <Paper sx={{ p: 2, height: 300 }}>
      <Typography variant="h6" gutterBottom>
        Weekly Service Trends
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="services" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default ServiceChart;
