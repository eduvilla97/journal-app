import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ note }) => {
	const dispatch = useDispatch();

	const newTitle = useMemo(() => {
		return note.title.length > 17 ? note.title.substring(0, 17) + '...' : note.title;
	}, [note.title]);

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
					<ListItemText primary={newTitle} />
					<ListItemText secondary='Nostrud nulla adipisicing ullamco.' />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
