import styled, { keyframes } from 'styled-components';

export const rotate360 = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(359deg)}
  `;

export const Rotate = styled.div`
	display: inline-block;
	animation: ${(props) => props.spinArrow && rotate360} 1s linear infinite;
`;
