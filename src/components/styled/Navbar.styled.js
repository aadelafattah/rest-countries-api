import styled from "styled-components";

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme.elements};
	box-shadow: 0 0px 10px rgb(0 0 0 / 0.2);
	.dark-mode {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 8px;
	}
`;

export default StyledNavbar;
