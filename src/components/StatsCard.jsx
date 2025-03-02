import { Paper, Box, Typography } from '@mui/material';

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: `4px solid ${color}`,
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ mt: 1 }}>
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: color,
          borderRadius: '50%',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        {icon}
      </Box>
    </Paper>
  );
};

export default StatsCard;
