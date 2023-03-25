import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { BsBook } from "react-icons/bs";
import { useSelector } from "react-redux";

function Chapters({ setActiveChapter }) {
	const [activeId, setActiveId] = useState();

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
							setActiveChapter(chapter);
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
