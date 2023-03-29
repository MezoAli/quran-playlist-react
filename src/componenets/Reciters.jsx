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
import { BiUserCircle } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setActiveReciter } from "../redux-store/slices/reciterSlice";
import { searchReciter } from "../redux-store/slices/reciterSearchSlice";

function Reciters({ activeReciter }) {
	const [activeId, setActiveId] = useState();
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const recitersList = useSelector((state) => state.reciters.reciters);
	const loading = useSelector((state) => state.reciters.loading);
	const modifiedRecitersList = useSelector(
		(state) => state.searchReciter.modifiedRecitersList
	);
	// const activeReciter = useSelector((state) => state.reciters.activeReciter);
	// console.log(activeId);
	// console.log(activeReciter);

	useEffect(() => {
		dispatch(searchReciter({ reciters: recitersList, search }));
	}, [dispatch, recitersList, search]);

	return (
		<>
			{loading ? (
				<Text textAlign="center" color="teal.400" py="20px">
					Loading...
				</Text>
			) : (
				<>
					<InputGroup>
						<InputLeftElement
							pointerEvents="none"
							children={<Search2Icon color="gray.300" />}
						/>
						<Input
							type="text"
							placeholder="Reciter Name"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</InputGroup>

					<List>
						{modifiedRecitersList.map((reciter) => {
							return (
								<ListItem
									key={reciter.id}
									py="10px"
									cursor="pointer"
									onClick={() => {
										dispatch(setActiveReciter(reciter));
										setActiveId(reciter.id);
									}}
									color={
										reciter.id === (activeId || activeReciter?.id) && "blue.400"
									}
									fontWeight={
										reciter.id === (activeId || activeReciter?.id) && "bold"
									}
									display="flex"
									alignItems="center"
								>
									<ListIcon
										as={BiUserCircle}
										fontSize={{ base: "16px", md: "22px" }}
										mr="20px"
									/>
									{reciter.name}
								</ListItem>
							);
						})}
					</List>
				</>
			)}
		</>
	);
}

export default Reciters;
