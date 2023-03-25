import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setActiveReciter } from "../redux-store/slices/reciterSlice";

function Reciters() {
	const [activeId, setActiveId] = useState();
	const dispatch = useDispatch();
	const recitersList = useSelector((state) => state.reciters.reciters);
	return (
		<List>
			{recitersList.map((reciter) => {
				return (
					<ListItem
						key={reciter.id}
						py="10px"
						cursor="pointer"
						onClick={() => {
							dispatch(setActiveReciter(reciter));
							setActiveId(reciter.id);
						}}
						color={reciter.id === activeId && "blue.400"}
						fontWeight={reciter.id === activeId && "bold"}
					>
						<ListIcon as={BiUserCircle} fontSize="22px" mr="20px" />
						{reciter.name}
					</ListItem>
				);
			})}
		</List>
	);
}

export default Reciters;
