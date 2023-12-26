import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ note }) => {
	const dispatch = useDispatch();

	const title = useMemo(() => {
		return note.title.length > 17 ? note.title.substring(0, 17) + '...' : note.title;
	}, [note.title]);
	
	const body = useMemo(() => {
		return note.body.length > 32 ? note.body.substring(0, 32) + '...' : note.body;
	}, [note.body]);
	

	const onClickNote = () => {
		dispatch(setActiveNote(note))
	};

	return (
		<ListItem>
			<ListItemButton onClick={onClickNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={title} />
					<ListItemText secondary={body} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
