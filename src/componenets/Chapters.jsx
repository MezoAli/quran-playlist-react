import { Search2Icon } from "@chakra-ui/icons";
import {
	List,
	ListItem,
	ListIcon,
	InputGroup,
	InputLeftElement,
	Input,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsBook } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setActiveChapter } from "../redux-store/slices/chapterSlice";
import { searchChapter } from "../redux-store/slices/chapterSearchSlice";

function Chapters() {
	const [activeId, setActiveId] = useState();
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const chaptersList = useSelector((state) => state.chapters.chapters);
	const loading = useSelector((state) => state.chapters.loading);
	const modifiedChapterList = useSelector(
		(state) => state.searchChapter.modifiedChaptersList
	);
	useEffect(() => {
		dispatch(searchChapter({ chapters: chaptersList, search: search }));
	}, [dispatch, chaptersList, search]);

	let content = "";

	if (loading) {
		return (content = (
			<Text textAlign="center" color="teal.400" py="20px">
				Loading...
			</Text>
		));
	}

	if (modifiedChapterList) {
		return (
			<>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Search2Icon color="gray.300" />}
					/>
					<Input
						type="text"
						placeholder="Chapter Name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</InputGroup>
				<List>
					{modifiedChapterList.map((chapter) => {
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
			</>
		);
	}
	return { content };
}

export default Chapters;
