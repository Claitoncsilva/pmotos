import { Box, makeStyles } from "@material-ui/core"
import Header from "../components/Header"

const useStyles = makeStyles((theme) =>({
    container: {
        padding: theme.spacing(6 , 0, 6)
    }
}))

const Default = ({ children }) =>  {
    const classes = useStyles()
    return(
        <>
            <Header />
                <Box className={classes.container}>
                  {children}
                </Box>
            <footer></footer>
        </>
    )
}

export default Default