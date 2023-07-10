import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TypingEffect from "components/typing_effect";

export default function About() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                    >
                        <Box>
                            <Typography variant="h4" component="h1">
                                Join Trums
                            </Typography>
                            <Typography variant="h6" component="h2" color="textSecondary">
                                Software Developer
                            </Typography>
                            <TypingEffect />
                            <Typography variant="body1">
                                Hi, I'm Join Trums, a passionate software developer with expertise in frontend and backend technologies.
                                I enjoy creating innovative and user-friendly applications that solve real-world problems.
                            </Typography>
                            <Typography variant="body1">
                                With a strong foundation in programming and problem-solving skills, I am constantly learning and exploring
                                new technologies to stay up-to-date with the ever-evolving field of software development.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="center">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a155f0b1-4492-4c2c-9f70-101cec027cb9/defakd5-82abc12f-3554-49d6-bd2b-99bbdabc5014.png/v1/fill/w_600,h_546,strp/zenitsu_by_mockingraffy_defakd5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ2IiwicGF0aCI6IlwvZlwvYTE1NWYwYjEtNDQ5Mi00YzJjLTlmNzAtMTAxY2VjMDI3Y2I5XC9kZWZha2Q1LTgyYWJjMTJmLTM1NTQtNDlkNi1iZDJiLTk5YmJkYWJjNTAxNC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.c-hNxenjJiEUAPfV9r66eEbX_5LD01GSopUIue5lZ48"
                            alt="Me"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
