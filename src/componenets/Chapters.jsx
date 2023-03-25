import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { BsBook } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setActiveChapter } from "../redux-store/slices/chapterSlice";

function Chapters() {
	const [activeId, setActiveId] = useState();
	const dispatch = useDispatch();

	const chaptersList = useSelector((state) => state.chapters.chapters);
	return (
		<List>
			{chaptersList.map((chapter) => {
				return (
					<ListItem
						key={chapter.id}
						py="10px"
						cursor="pointer"
						onClick={() => {
							dispatch(setActiveChapter(chapter));
							setActiveId(chapter.id);
						}}
						color={chapter.id === activeId && "blue.400"}
						fontWeight={chapter.id === activeId && "bold"}
					>
						<ListIcon as={BsBook} fontSize="22px" mr="20px" />
						{chapter.name_simple}
					</ListItem>
				);
			})}
		</List>
	);
}

export default Chapters;
