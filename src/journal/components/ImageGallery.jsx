import { ImageList, ImageListItem } from "@mui/material"

const itemData = [];

export const ImageGallery = () => {
	return (
		<ImageList sx={{width: '100%', height: 500}} cols={4} rowHeight={164}>
			{itemData.map((item) => (
				<ImageListItem key={item}>
					<img />
				</ImageListItem>
			))}
		</ImageList>
	)
}
