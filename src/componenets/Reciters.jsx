import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

function Reciters({ reciters, setActiveReciter }) {
	const [activeId, setActiveId] = useState();
	return (
		<List>
			{reciters.map((reciter) => {
				return (
					<ListItem
						key={reciter.id}
						py="10px"
						cursor="pointer"
						onClick={() => {
							setActiveReciter(reciter);
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
