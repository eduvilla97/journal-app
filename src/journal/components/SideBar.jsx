import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
	return (
		<Box
			component='nav'
			sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0 }}}
		>

			<Drawer
			variant="permanent"
			open
			sx={{
				display: { xs: 'block'},
				'& .MuiDrawer-paper' : { boxSizing: 'border-box', width: drawerWidth}
			}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div"> Eduardito </Typography>
				</Toolbar>
				<Divider />

				<List>
					{
						['Enero', 'Febrero', 'Marzo', 'Abril'].map((entry) => (
							<ListItem key={entry}>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Grid container>
										<ListItemText primary={ entry } />
										<ListItemText secondary="Nostrud nulla adipisicing ullamco." />


									</Grid>

								</ListItemButton>
							</ListItem>
						))
					}
				</List>
			</Drawer>

		</Box>
	)
}
