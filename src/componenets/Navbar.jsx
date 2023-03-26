import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<Flex
			as="nav"
			justifyContent="space-between"
			alignItems="center"
			backgroundColor="blue.400"
		>
			<Text
				p={4}
				textAlign="center"
				color="white"
				fontSize="30px"
				fontWeight="bold"
			>
				Quran Player
			</Text>
			<Stack direction="row">
				<Button variant="ghost">
					<NavLink to="/">Home</NavLink>
				</Button>
				<Button variant="ghost">
					<NavLink to="/about">About</NavLink>
				</Button>
			</Stack>
		</Flex>
	);
}

export default Navbar;
