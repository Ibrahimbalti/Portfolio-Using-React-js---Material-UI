
import { Box,Typography} from "@mui/material"
import { CustomStyle } from "../header/HeaderStyle"
export const Decorator=({label,withIcon,Icon})=>{
    return(
        <Box sx={CustomStyle.decorator}>
            <Typography variant="span" sx={CustomStyle.decoratorText}>
              {label}
            </Typography>
            {withIcon ? (<Typography variant="span" sx={CustomStyle.decoratorArrow}>
              {Icon}
            </Typography>):null}
          </Box>
    )
}