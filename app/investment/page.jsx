'use client';

import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function InvestmentPage() {
  return (
    <Box sx={{ position: "relative", minHeight: "70vh", px: 0 }}>
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%",
        minHeight: 320,
        px: { xs: 2, md: 8 },
        pt: 6,
        background: "linear-gradient(to bottom, #e8eaf6 70%, #21243d 100%)",
        position: "relative"
      }}>
        {/* TEXT LEFT */}
        <Box sx={{ maxWidth: 480, pb: 5 }}>
          <Typography variant="h3" sx={{ color: "#102040", fontWeight: 800, mb: 1, textAlign: "left" }}>
            📈 Investment
          </Typography>
          <Typography paragraph color="text.secondary" sx={{ mb: 2, textAlign: "left" }}>
            <b>What is Investment?</b> Investment is the process of allocating your money into assets (like stocks, bonds, real estate) with the expectation of earning a return or profit.
          </Typography>
          <Paper elevation={3} sx={{ p: 3, mt: 2, textAlign: 'left', borderRadius: 3, background: "#fff8" }}>
            <Typography><b>Why Invest?</b></Typography>
            <List>
              <ListItem><ListItemText primary="Grow your wealth over time" /></ListItem>
              <ListItem><ListItemText primary="Beat inflation" /></ListItem>
              <ListItem><ListItemText primary="Achieve financial independence" /></ListItem>
            </List>
            <Typography sx={{ mt: 2 }}><b>Example:</b></Typography>
            <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 1 }}>
              <Typography>
                Investing ₹10,000 in a mutual fund that grows at 10% per year could be worth more than ₹25,000 in 10 years.
              </Typography>
            </Paper>
          </Paper>
        </Box>
        {/* ILLUSTRATION/IMAGE RIGHT */}
        <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <Box sx={{
            width: 360,
            height: 260,
            background: "url('/images/investment-hero.jpg') center/cover no-repeat",
            borderRadius: 24,
            boxShadow: '0 6px 36px #0002',
            position: "relative",
            overflow: "hidden"
          }}>
            <Box sx={{
              position: "absolute",
              left: 0, bottom: 0, width: "100%", height: "60%",
              background: "linear-gradient(0deg, #21243d 80%, rgba(33,36,61,0.0) 100%)"
            }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
  
